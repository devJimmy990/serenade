import React from 'react';
import SongCard from './song_card';

const RecommendedSongs = () => {
    return (
        <div class="recommended-songs px-2">
            <h1>Recommended Songs</h1>
            <div class="song-container d-flex flex-lg-column overflow-auto">
                {recommended.map((song) => (<SongCard key={song.title} song={song} />))}
            </div>
        </div>
    );
}

export default RecommendedSongs;
const recommended = [
    {
        title: "Blank Space", artist: "Taylor Swift", duration: "4:33",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ea61baa7-9c4b-4f43-805e-81de5fc8aa2b"
    },
    {
        title: "One Dance", artist: "Drake", duration: "4:03",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6f72f702-c049-46fe-af76-a3b188b9a909"
    },
    {
        title: "Pawn It All", artist: "Alicia Keys", duration: "3:10",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ad2e664a-3ab9-4f30-933a-623e26999030"
    },
    {
        title: "Lose Control", artist: "Teddy Swims", duration: "3:30",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/666e065b-eb53-4320-a580-30e266370955"
    },
    {
        title: "Be The One", artist: "Dua Lipa", duration: "3:24",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/619ed17f-5df2-4d32-a419-78f120a1aa5c"
    },
    {
        title: "Delicate", artist: "Taylor Swift", duration: "3:54",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/0ed3f51d-b769-4256-a4dd-8f35b12a1690"
    },
    {
        title: "Last Christmas", artist: "Wham!", duration: "4:39",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/33779e1a-55f9-402a-b004-002395d0fbf1"
    },
    {
        title: "Paradise", artist: "Coldplay", duration: "4:20",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/96bc0648-51f9-46ab-a426-766c6bc93d80"
    },
    {
        title: "Easy On Me", artist: "Adele", duration: "3:45",
        img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/885b67a7-1816-4235-9dd3-5d879a202728"
    }
]