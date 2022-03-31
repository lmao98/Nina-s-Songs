import React from 'react'
import Review from './Review'

function Reviews({ reviews, onDelete }) {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => {
        return <Review onDelete={() => onDelete(review._id)} review={review} key={review._id} />
      })}
    </div>
  )
}


export default Reviews
