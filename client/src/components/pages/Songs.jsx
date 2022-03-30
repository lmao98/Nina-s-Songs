import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Songs() {
  const [songList, setSongList] = useState([])
  useEffect(() => {
    const updateSongList = async () => {
      const response = await axios.get("/api/song")
      setSongList(response.data)
    }
    updateSongList()
  }, [])
  useEffect(() => {
    console.log(songList)
  }, [songList])

  return (
    <div>Songs</div>
  )
}

export default Songs