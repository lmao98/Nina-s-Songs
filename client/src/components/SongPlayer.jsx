import React from 'react'

function SongPlayer({ src, bandLink, bandName, songLink, songName }) {
    return (
        <div className='bandCamp-container'>
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={src}> </iframe>
        </div>
    )
}

export default SongPlayer