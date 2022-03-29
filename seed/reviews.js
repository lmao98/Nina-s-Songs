const reviewModel = require('../models/review')
const main = async (db) => {
  const reviews = [
    {
      value: 5,
      description: 'Great song',
      reviewer: 'Abe',
    },
    {
      value: 4,
      description: 'good song',
      reviewer: 'Mo',
    },
    {
      value: 5,
      description: 'perfect',
      reviewer: 'Ahmed',
    },
    {
      value: 3,
      description: 'Ok song',
      reviewer: 'Omar',
    },
    {
      value: 1,
      description: 'Bad song',
      reviewer: 'Kim',
    }
  ]
  await db.dropCollection('reviews')
  await reviewModel.insertMany(reviews)
  console.log('Created reviews!')
}
module.exports = main