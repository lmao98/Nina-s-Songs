import React from 'react'
import SongPlayer from './SongPlayer'

function Song({ song }) {
  return (
    <>
      <h2>{song.songName}</h2>

      <SongPlayer {...song} />
    </>
  )
}


export default Song