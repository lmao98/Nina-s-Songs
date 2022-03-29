const express = require('express')
const songRoutes = require('./song')

const router = express.Router()
router.use('/song', songRoutes)

module.exports = router