const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let options = {
    timestamps: true
};

let model = mongoose.model('users', new Schema({
    uuid: {
        type: String,
        minLength: 36,
        maxLength: 36,
        match: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
        unique: true,
        index: true,
        required: true
    },
    timeSpent: {
        type: Number,
        min: 0,
        default: 0
    },
    test: {
        type: Boolean,
        default: true
    },
    rawHeaders: {
        type: String,
        maxLength: 600,
        default: "{}"
    },
    app: {
        version: {
            type: String,
            maxLength: 16,
            default: "0"
        },
        build: {
            type: String,
            maxLength: 12,
            default: "0"
        }
    },
    display: {
        density: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        },
        width: {
            type: Number,
            min: 0,
            max: 10000,
            default: 0
        },
        height: {
            type: Number,
            min: 0,
            max: 10000,
            default: 0
        }
    },
    device: {
        manufacturer: {
            type: String,
            maxLength: 50,
            trim: true,
            default: ""
        },
        name: {
            type: String,
            maxLength: 50,
            trim: true,
            default: ""
        },
        version: {
            type: String,
            maxLength: 16,
            trim: true,
            default: ""
        }
    },
    system: {
        osVersion: {
            type: String,
            maxLength: 12,
            default: ""
        },
        cpuArchitecture: {
            type: String,
            maxLength: 12,
            default: ""
        }
    },
    connection: {
        locale: {
            type: String,
            maxLength: 8,
            default: ""
        },
        network: {
            type: String,
            maxLength: 50,
            default: ""
        },
        location: {
            type: String,
            maxLength: 128,
            default: ""
        }
    }
}, options));

module.exports = model;