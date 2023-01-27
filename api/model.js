const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    last_name:
    {
        required: true,
        type: String
    },
    first_name:
    {
        required: true,
        type: String
    },
    hometown:
    {
        required: false,
        type: String
    },
    class:
    {
        required: false,
        type: String
    },
    p_time:
    {
        required: false,
        type: Number
    },
    f_time:
    {
        required: false,
        type: Number
    },
    imp:
    {
        required: false,
        type: String
    },
    event:
    {
        required: false,
        type: String
    },
})

module.exports = mongoose.model('players', dataSchema)