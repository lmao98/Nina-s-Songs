const reviewModel = require('../models/review')
const songModel = require('../models/song')


const main = async (db) => {
    // const entranceCafe = await Location.find({ name: 'Entrance' })
    // const safariCafe = await Location.find({ name: 'Safari Park' })
    const abeReview = await reviewModel.findOne({ reviewer: "Abe" })
    const moReview = await reviewModel.findOne({ reviewer: "Mo" })
    const omarReview = await reviewModel.findOne({ reviewer: "Omar" })
    const ahmedReview = await reviewModel.findOne({ reviewer: "Ahmed" })
    const kimReview = await reviewModel.findOne({ reviewer: "Kim" })

    const songs = [
        {
            title: 'test Mia',
            type: 'cover',
            description: 'text',
            reviewIds: [
                abeReview._id
            ]
        },
        {
            title: 'test 2 Mia',
            type: 'cover',
            description: 'text',
            reviewIds: [
                moReview._id
            ]
        },
        {
            title: 'test 3 Mia',
            type: 'original',
            description: 'text',
            reviewIds: [
                omarReview._id
            ]
        },
        {
            title: 'test 4 Mia',
            type: 'original',
            description: 'text',
            reviewIds: [
                ahmedReview._id,
                kimReview._id
            ]
        },
    ]
    await db.dropCollection('songs')
    await songModel.insertMany(songs)
    console.log('Created songs !')
}

module.exports = main