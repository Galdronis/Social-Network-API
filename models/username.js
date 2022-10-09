const {Schema, model} = require('mongoose');

const email = new Schema (
    {
        type: String,
        required: true,
        unique: true,
        trimmed: true
    }
)