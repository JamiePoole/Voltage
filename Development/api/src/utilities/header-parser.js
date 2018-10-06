const utility = function(headers) {
    let fbHttpEngine = headers['x-fb-http-engine'];
    let userAgent = headers['http_user_agent'] || headers['user-agent'];
    
    let request = {};
    request.isValid = fbHttpEngine || userAgent;
    request.isFacebook = false;
    request.isTesting = false;
    request.isInvalid = false;
    request.agentObject = null;
    
    // Parse function last checked 2018-10-06
    let userParts = userAgent.replace('[', '').replace(']', '').split(';');
    let userObject = {};
    userParts.forEach(value => { let parts = value.split('/'); userObject[parts[0]] = parts[1]; });

    // Request is most likely from Facebook, but no device data
    if (fbHttpEngine) {
        request.isFacebook = true;
    }

    // Request is most likely from Facebook, and likely has correct User-Agent
    if (fbHttpEngine && userObject['FBAV']) {
        // From `user` Schema
        request.agentObject = {
            app: {
                version: userObject['FBAV'],
                build: userObject['FBBV'],
            },
            display: {
                density: userObject['FBDM'].split(',')[0].split('=')[1],
                width: userObject['FBDM'].split(',')[1].split('=')[1],
                height: userObject['FBDM'].split(',')[2].split('=')[1].replace('}', '')
            },
            device: {
                manufacturer: userObject['FBMF'],
                name: userObject['FBBD'],
                version: userObject['FBDV']
            },
            system: {
                osVersion: userObject['FBSV'],
                cpuArchitecture: userObject['FBCA']
            },
            connection: {
                locale: userObject['FBLC'],
                network: userObject['FBCR']
            }
        };
    }

    // Not from Facebook, check if from AR Player/AR Studio
    if (!fbHttpEngine) {
        // Test strings last checked 2018-10-06
        let testStrings = ['SparkARStudio', 'ARStudioPlayer'];
        testStrings.forEach(value => { if (userAgent.split('%20').join('').indexOf(value) > -1) request.isTesting = true; });
    }

    return request;
}

module.exports = utility;