const {Schema, model} = require('mongoose')

const Songs = new Schema(
    {
        songName: { type: String, required: true},
        bandName: { type: String, required: true},
        src: { type: String, required: true},
        songLink: { type: String, required: true},
        bandLink: { type: String, required: true},
        reviewIds: [{type: Schema.Types.ObjectId}]
    },
    {
        toJSON:{
            virtuals: true
        }
    }
)

Songs.virtual('reviews', {
    ref: "reviews",
    localField: "reviewIds",
    foreignField: "_id",
    justOne: false
})

Songs.virtual('avgRating').get(function() {
    console.log(this.reviews)
    if(this.reviews === undefined) {
        return undefined
    }
    const total = this.reviews.reduce((acc,review) => acc + review.value ,0)
    const count = this.reviews.length
    return total / count 
})

module.exports = model('songs',Songs)