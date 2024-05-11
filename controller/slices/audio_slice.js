import { createSlice } from "@reduxjs/toolkit";
const songs = [
    {
        title: "Redemption",
        name: "Besomorph & Coopex",
        source:
            "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Besomorph-Coopex-Redemption.mp3",
        cover:
            "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/398875d0-9b9e-494a-8906-210aa3f777e0",
    },
    {
        title: "What's The Problem?",
        name: "OSKI",
        source:
            "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/OSKI-Whats-The-Problem.mp3",
        cover:
            "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/810d1ddc-1168-4990-8d43-a0ffee21fb8c",
    },
    {
        title: "Control",
        name: "Unknown Brain x Rival",
        source:
            "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Unknown-BrainxRival-Control.mp3",
        cover:
            "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7bd23b84-d9b0-4604-a7e3-872157a37b61",
    },
];

export const audioSlicer = createSlice({
    name: "audio",
    initialState: {
        duration: 0,
        currentSong: 0,
        currentTime: 0,
        reference: null,
        name: songs[0].name,
        title: songs[0].title,
        cover: songs[0].cover,
        source: songs[0].source,

    },
    reducers: {
        setCurrentSong(state, action) {
            let index = action.payload.currentSong;
            if (index < 0) index = songs.length - 1;
            if (index > songs.length - 1) index = 0;
            state.currentSong = index;
            console.log(songs[state.currentSong]);
            console.log(songs[index]);
            state.name = songs[state.currentSong].name;
            state.cover = songs[state.currentSong].cover;
            state.title = songs[state.currentSong].title;
            state.source = songs[state.currentSong].source;
        },
        setCurrentTime(state, action) {
            console.log(action.payload.currentTime, state.duration);
            state.currentTime = action.payload.currentTime;
        },
        setDuration(state, action) {
            state.duration = action.payload.duration;
        },
        setAudioReference(state, action) {
            state.reference = action.payload.reference;
        }
    }
});
export default audioSlicer.reducer
export const {
    setDuration,
    setCurrentSong,
    setCurrentTime,
    setAudioReference,
} = audioSlicer.actions;



// const [currentSong, setCurrentSong] = useState(0);
// const [isPlaying, setIsPlaying] = useState(false);
// const [currentTime, setCurrentTime] = useState(0.01);
// const [duration, setDuration] = useState(0);
// const [lyrics, setLyrics] = useState([]);
// const [volume, setVolume] = useState(50);
// const [isMuted, setIsMuted] = useState(false);
// const [playbackSpeed, setPlaybackSpeed] = useState(1);
// const [slowerPlaybackSpeed, setSlowerPlaybackSpeed] = useState(0.5);
// const [neutralPlaybackSpeed, setNeutralPlaybackSpeed] = useState(1);
// const [fasterPlaybackSpeed, setFasterPlaybackSpeed] = useState(1.5);

// export const songs = [
//     {
//         title: "Happy",
//         name: "Pharrell Williams",
//         source: "/Happy.mp3",
//         cover: "/happythumb.jpg",
//         lyricsUrl: "/Happy.srt",
//         controlsColor: "orange",
//         subtitlesColor: "rgba(255,255,255,0.9)",
//         subtitlesTextColor: "purple"
//     },
//     {
//         title: "Hello",
//         name: "Adele",
//         source: "/Hello.mp3",
//         cover: "/Hello.jpg",
//         lyricsUrl: "/Hello.srt",
//         controlsColor: "rgba(255,255,255,0.8)",
//         subtitlesColor: "rgba(0,0,0,0.2)",
//         subtitlesTextColor: "black"
//     },
// ];