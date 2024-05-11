import React from 'react';

const AlbumCard = ({ album }) => {
    return (
        <div className='album'>
            <div className='album-frame'>
                <img src={album.img} alt="{album.title}" />
            </div>
            <div>
                <h2>{album.title}</h2>
                <p>{album.artist}</p>
            </div>
        </div>
    );
}

export default AlbumCard;
