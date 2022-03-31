import React from 'react'
import { Link } from 'react-router-dom'
import SongPlayer from './SongPlayer'

function Song({ song }) {
  return (
    <>
      <h2>
        <Link to={`/song/${song._id}`}>{song.songName}</Link>
      </h2>

      <SongPlayer {...song} />
    </>
  )
}


export default Song