const {Schema} = require('mongoose')

const Songs = new Schema(
    {
        title: { type: String, required: true},
        type: { type: String, required: true},
        description: { type: String, required: true},
        ratings: { type: String, required: true}
    }
)
module.exports = Songs