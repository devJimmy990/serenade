import React from 'react';
import AlbumCard from './album_card';
const RecommendedAlbums = () => {

    return (
        <div className="albums">
            <h1>Recommended Albums</h1>
            <div className='album-container containers'>
                {recommended.map((album) => (<AlbumCard album={album} />))}
            </div>
        </div>
    );
}

export default RecommendedAlbums;
const recommended = [
    {
        title: "Views", artist: "Drake",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/74c4f0f9-d73e-4737-83fa-ea4afe392229",
    },
    {
        title: "Speak Now", artist: "Taylor Swift",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d3a0bac0-fdb4-467e-bdf5-f3f415928f24",
    },

    {
        title: "Born to Die", artist: "Lana Del Rey",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/85521a12-cc46-4b9f-a742-21ba407ebd5e",
    },
    {
        title: "Endless Summer Vacation", artist: "Miley Cyrus",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4e7bf466-7fa5-4dad-b628-5bca12833b64"
    },
    {
        title: "The Dark Side of The Moon", artist: "Pink Floyd",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f01f546a-7ab7-4e90-acb9-1c1e817b676d"
    }
]