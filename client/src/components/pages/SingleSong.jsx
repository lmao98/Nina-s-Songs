import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
  useEffect(() => {
    console.log(song)
  }, [song])
  return (
    <div>SingleSong</div>
  )
}

export default SingleSong