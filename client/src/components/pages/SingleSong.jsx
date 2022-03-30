import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SongPlayer from '../SongPlayer'

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

  return (
    song ? <>
      <h1>{song.songName}</h1>
      <h2>{song.bandName}</h2>
      <SongPlayer {...song} />

    </> :
      null
  )
}

export default SingleSong