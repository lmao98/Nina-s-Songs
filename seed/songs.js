const db = require('../db')
const songModel = require('../models/song')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const songs = [
    {
      title: 'test Mia',
      type: 'cover',
      description: 'text',
    },
    {
        title: 'test 2 Mia',
        type: 'cover',
        description: 'text',
      },
      {
        title: 'test 3 Mia',
        type: 'original',
        description: 'text',
      },
      {
        title: 'test 4 Mia',
        type: 'original',
        description: 'text',
      },
  ]
await db.dropCollection('songs')
  await songModel.insertMany(songs)
  console.log('Created songs !')
}
const run = async () => {
  await main()
  db.close()
}

run()