import React from 'react'

function Review({ review, onDelete }) {
  return (
    <div>
      <button onClick={onDelete}>X</button>
      {(new Array(5)).fill(0).map((e, i) => i < review.value ? '★' : '☆')} '{review.description}' - {review.reviewer}
    </div>
  )
}

export default Review