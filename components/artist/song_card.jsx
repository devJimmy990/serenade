import React from 'react';

const SongCard = ({ song }) => {
    return (
        <div class="artist">
            <img src={song.img} alt='{song.title}' />
            <p>{song.title}</p>
        </div>
    );
}

export default SongCard;
