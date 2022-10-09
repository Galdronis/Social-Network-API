const {Schema, model} = require('mongoose');

const thoughts = new Schema (
    {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }
)