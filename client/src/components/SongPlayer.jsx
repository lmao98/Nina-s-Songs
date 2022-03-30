import React from 'react'

function SongPlayer({ src, bandLink, bandName, songLink, songName }) {
    return (
        <div className='bandCamp-container'>
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={src}> </iframe>
            {/* <div className='bandCamp-names'>
                <a href={bandLink} title={bandName} target="_blank" className='bandCamp-name'>{bandName}</a>
                ·
                <a href={songLink} title={songName} target="_blank" className='bandCamp-name'>{songName}</a>
            </div> */}
        </div>
    )
}

export default SongPlayer