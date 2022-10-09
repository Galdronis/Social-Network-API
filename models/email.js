const {Schema, model} = require('mongoose');

const email = new Schema (
    {
        type: String,
        required: true,
        unique: true,
        match: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/
    }
)