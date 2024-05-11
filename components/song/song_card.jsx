import React from 'react';
import { PlayCircle } from '@mui/icons-material';
import { Box } from '@mui/material';
const SongCard = ({ song }) => {
    return (
        <div className="song d-flex flex-column justify-content-between flex-lg-row col-4 col-lg-11 p-2 p-lg-0">
            <Box className="song-img col-lg-3 position-relative rounded-3 mb-2 mb-lg-0"
                sx={{
                    width: '100%',
                    aspectRatio: "4/3",
                    borderRadius: 'inherit',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${song.img})`,
                    border: "2px solid rgba(159, 160, 168, 0.5)",
                    boxShadow: "rgba(221, 221, 221, 0.3) 0px 6px 18px -3px, rgba(221, 221, 221, 0.2) 0px -3px 0px inset",
                    cursor: 'pointer',
                    '&:hover .overlay': {
                        opacity: 1
                    },
                }}>
                <div className="overlay">
                    <PlayCircle />
                </div>
            </Box>

            <div className="song-title">
                <h2>{song.title}</h2>
                <p className='d-none d-lg-block'>{song.artist}</p>
            </div>
            <span className='d-none d-lg-block'>{song.duration}</span>
        </div>
    );
}

export default SongCard;
