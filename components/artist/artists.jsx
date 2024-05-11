import React from 'react';
import SongCard from './song_card';
const FeaturedSongs = () => {
    
    return (
        <div class="artists">
            <h1>Featured Artists</h1>
            <div class="artist-container containers">
                {featured.map((song) => (<SongCard song={song} />))}
            </div>
        </div>
    );
}

export default FeaturedSongs;
const featured = [
    { title: "Taylor Swift", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8feaa0f-6ae7-4c69-bb7d-4a11de76b4f5" },
    { title: "The Weeknd", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bf80314e-5a02-4702-bb64-eae8c113c417" },
    { title: "Dua Lipa", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e4576af8-0e84-4343-8f90-7a01acb9c8b7" },
    { title: "Jimin", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d8eb2888-1e74-4117-82d7-833ad29e3cc1" },
    { title: "Alicia Keys", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f23adc16-11d7-41dc-af6a-191e03a81603" },
    { title: "Maroon 5", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f511c102-3217-4bea-bede-8be23b969bd8" },
    { title: "Imagine Dragons", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9a8bd237-b525-43e6-a37c-daaac39db8ce" },
    { title: "Billie Eilish", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/99452c85-26f4-4ccd-b439-7d1bd3875634" }
];