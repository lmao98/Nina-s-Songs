const reviewModel = require('../models/review')
const songModel = require('../models/song')


const main = async (db) => {
    const abeReview = await reviewModel.findOne({ reviewer: "Abe" })
    const moReview = await reviewModel.findOne({ reviewer: "Mo" })
    const omarReview = await reviewModel.findOne({ reviewer: "Omar" })
    const ahmedReview = await reviewModel.findOne({ reviewer: "Ahmed" })
    const kimReview = await reviewModel.findOne({ reviewer: "Kim" })

    const songs = [
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1241397061&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            bandLink: "https://soundcloud.com/noor-alseed",
            bandName: "raven club",
            songLink: "https://soundcloud.com/noor-alseed/violt",
            songName: "violt",
            reviewIds: [
                abeReview._id
            ]
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1241204278&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            bandLink: "https://soundcloud.com/noor-alseed",
            bandName: "raven club",
            songLink: "https://soundcloud.com/noor-alseed/at-my-worst",
            songName: "at my worst",
            reviewIds: [
                moReview._id
            ]
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1241202718&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            bandLink: "https://soundcloud.com/noor-alseed",
            bandName: "raven club",
            songLink: "https://soundcloud.com/noor-alseed/heather",
            songName: "HEATHER",
            reviewIds: [
                omarReview._id
            ]
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1241200324&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            bandLink: "https://soundcloud.com/noor-alseed",
            bandName: "raven club",
            songLink: "https://soundcloud.com/noor-alseed/no-time-to-die",
            songName: "no time to die",
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