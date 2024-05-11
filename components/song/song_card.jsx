import React from 'react';
import { PlayCircle } from '@mui/icons-material';
const SongCard = ({ song }) => {
    return (
        <div className="song d-flex flex-column justify-content-between flex-lg-row">
            <div className="song-img">
                <img src={song.img} alt="{song.title}" style={{ aspectRatio: "1/1" }} />
                <div className="overlay">
                    <PlayCircle />
                </div>
            </div>
            <div className="song-title">
                <h2>{song.title}</h2>
                <p className='d-none d-lg-block'>{song.artist}</p>
            </div>
            <span className='d-none d-lg-block'>{song.duration}</span>
        </div>
    );
}

export default SongCard;
