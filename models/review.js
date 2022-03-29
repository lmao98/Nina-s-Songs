const {Schema, model} = require('mongoose')

const Reviews = new Schema(
    {
        value: {type: Number},
        description: {type: String},
        reviewer: {type: String}
    },

)


module.exports = model('reviews',Reviews)