import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SongPlayer from '../SongPlayer'
import Reviews from '../Reviews'

function SingleSong() {
  const { id } = useParams()
  const [song, setSong] = useState()
  useEffect(() => {
    const updateSong = async () => {
      const response = await axios.get("/api/song/" + id)
      setSong(response.data)
    }
    updateSong()
  }, [])

  async function deleteReview(reviewId) {
    const response = await axios.delete(`/api/song/${id}/review/${reviewId}`)
    console.log(response.data)
  }

  return (
    song ? <>
      <h1>{song.songName}</h1>
      <h2>{song.bandName}</h2>
      <SongPlayer {...song} />
      <Reviews onDelete={deleteReview} reviews={song.reviews} />
    </> :
      null
  )
}

export default SingleSong