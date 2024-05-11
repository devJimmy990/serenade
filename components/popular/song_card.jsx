import React from 'react';
import { PlayCircle } from '@mui/icons-material';
const SongCard = ({ song }) => {
    return (
        <div className='swiper-wrapper'>
            <img src={song.img} alt='{song.title}' />
            <div className='slide-overlay' >
                <h2>{song.title}</h2>
                <button className='text-transform-capitalize'
                    style={{ textTransform: "capitalize" }}>
                    Listen Now <PlayCircle />
                </button>
            </div>
        </div>
    );
}

export default SongCard;
