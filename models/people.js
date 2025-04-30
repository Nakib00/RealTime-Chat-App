const mongoes = require('mongoose');

const peopleSchema = new mongoes.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
}, {
    timestamps: true
});

const People = mongoes.model('People', peopleSchema);

module.exports = People;