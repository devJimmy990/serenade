import { Box } from '@mui/material';
import React from 'react';

const HeaderPlayerController = ({ song: { rotated, audio: { cover, title, name } } }) => {
    return (
        <div className='d-flex justify-content-start flex-lg-column align-items-lg-center'>
            <Box
                className="album-cover col-12 col-lg-12 p-5"
                style={{ animationPlayState: rotated ? "running" : "paused", maxWidth:'100px' }}
                sx={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${cover})`,
                }}
            >
                <span className='point' ></span>
            </Box>

            <div className='d-none d-lg-block text-center'>
                <h2>{title}</h2>
                <p>{name}</p>
            </div>
        </div>
    );
}

export default HeaderPlayerController;
