import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Song from '../Song'

function Songs() {
  const [songList, setSongList] = useState([])
  useEffect(() => {
    const updateSongList = async () => {
      const response = await axios.get("/api/song")
      setSongList(response.data)
    }
    updateSongList()
  }, [])

  return (
    <div>
      {songList.map((song) => {
        return <Song song={song} key={song._id} />
      })}
    </div>
  )
}

export default Songs