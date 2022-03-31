import React from 'react'
import Review from './Review'

function Reviews({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => {
        return <Review review={review} key={review._id} />
      })}
    </div>
  )
}


export default Reviews
