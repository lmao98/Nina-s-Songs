const express = require('express')
const songModel = require('../../../models/song')
const reviewModel = require('../../../models/review')

const router = express.Router()

// Add a song
router.post('/', async (req, res) => {
    try {
        const songInfo = req.body
        const newSong = await songModel.create(songInfo)
        res.json(newSong)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})

// get all songs
router.get('/', async (req, res) => {
    try {
        const allSongs = await songModel.find({})
        res.json(allSongs)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})

// get song by id
router.get('/:id', async(req, res) => {
    try {
        const songId = req.params.id
        const song = await songModel.findById(songId).populate('reviews')
        res.json(song)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})

// delete song by id
router.delete('/:id', async(req, res) => {
    try {
        const songId = req.params.id
        const deletedSong = await songModel.findByIdAndDelete(songId)
        res.json(deletedSong)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})

// add a review
router.put('/:id/review', async(req, res) => {
    try {
        const songId = req.params.id
        const review = req.body
        const song = await songModel.findById(songId)
        const newReview = await reviewModel.create(review)
        song.reviewIds.push(newReview)
        await song.save()
        res.json(song)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})

module.exports = router