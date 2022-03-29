const {Schema, model} = require('mongoose')

const Songs = new Schema(
    {
        title: { type: String, required: true},
        type: { type: String, required: true},
        description: { type: String, required: true},
        ratings: [{ type: Number}]
    },
    {
        toJSON:{
            virtuals: true
        }
    }
)

Songs.virtual('avgRating').get(function() {
    const total = this.ratings.reduce((acc,rating) => acc + rating ,0)
    const count = this.ratings.length
    return total / count 
})

module.exports = model('songs',Songs)