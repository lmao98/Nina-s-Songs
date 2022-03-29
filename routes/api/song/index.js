const express = require('express')
const songModel = require('../../../models/song')

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
        const song = await songModel.findById(songId)
        res.json(song)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
})

module.exports = router