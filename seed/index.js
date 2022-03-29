const db = require('../db')
const reviews = require('./reviews')
const songs = require('./songs')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


async function run() {
    await reviews(db)
   await songs(db)
   db.close()
}

run()