const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/songsDatabase'


mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

  
const db = mongoose.connection

module.exports = db