import React from 'react'

function Review({ review }) {
  return (
    <div>{(new Array(5)).fill(0).map((e, i) => i < review.value ? '★' : '☆')} '{review.description}' - {review.reviewer}</div>
  )
}

export default Review