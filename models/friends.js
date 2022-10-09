const {Schema, model} = require('mongoose');

const friends = new Schema (
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
)