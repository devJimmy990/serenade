import { createSlice } from "@reduxjs/toolkit";
export const controllerSlicer = createSlice({
    name: "audio",
    initialState: {
        isPlaying: false,
        volume: 50,
        isMuted: false,
        // playbackSpeed: 1,
        // slowerPlaybackSpeed: 0.5,
        // neutralPlaybackSpeed: 1,
        // fasterPlaybackSpeed: 1.5
    },
    reducers: {

        setIsPlaying(state, action) {
            state.isPlaying = action.payload.isPlaying;
        },


        setVolume(state, action) {
            state.volume = action.payload.volume;
        },
        setIsMuted(state, action) {
            state.isMuted = action.payload.isMuted;
        },
        // setPlaybackSpeed(state, action) {
        //     state.playbackSpeed = action.payload.playbackSpeed;
        // },
        // setSlowerPlaybackSpeed(state, action) {
        //     state.slowerPlaybackSpeed = action.payload.slowerPlaybackSpeed;
        // },
        // setNeutralPlaybackSpeed(state, action) {
        //     state.neutralPlaybackSpeed = action.payload.neutralPlaybackSpeed;
        // },
        // setFasterPlaybackSpeed(state, action) {
        //     state.fasterPlaybackSpeed = action.payload.fasterPlaybackSpeed;
        // },
        // changeSong(state, action) {
        //     state.currentSong = action.payload.currentSong;
        //     // state.lyrics = action.payload.lyrics;
        //     state.duration = 0;
        //     state.isPlaying = true;
        //     state.playbackSpeed = 1;
        //     state.currentTime = 0.01;
        // }
    }
});
export default controllerSlicer.reducer
export const { setCurrentSong,
    setVolume,
    setIsMuted,
    // changeSong,
    setIsPlaying,
    // setPlaybackSpeed,
    // setSlowerPlaybackSpeed,
    // setFasterPlaybackSpeed,
    // setNeutralPlaybackSpeed,
} = controllerSlicer.actions;
