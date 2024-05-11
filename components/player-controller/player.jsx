import HeaderPlayerController from './header';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying } from '@/controller/slices/controller_slice';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PlayArrow, FastRewind, FastForward, Pause } from '@mui/icons-material';
import { setCurrentSong, setCurrentTime, setDuration } from '@/controller/slices/audio_slice';

const PlayerController = () => {
    const audioRef = useRef(null);
    const dispatch = useDispatch();
    const [rotated, setRotated] = useState(false);
    const audio = useSelector(state => state.audio);
    const controller = useSelector(state => state.controller);

    useEffect(() => {
        dispatch(setCurrentSong({ currentSong: 0 }));
    }, [dispatch]);

    const stopPlaying = useCallback(() => {
        dispatch(setIsPlaying({ isPlaying: false }));
        setRotated(false);
    }, [dispatch]);

    const handlePlayClick = useCallback(() => {
        if (controller.isPlaying) {
            audioRef.current.pause();
            setRotated(false);
        } else {
            audioRef.current.play();
            setRotated(true);
        }
        dispatch(setIsPlaying({ isPlaying: !controller.isPlaying }));
    }, [controller.isPlaying, dispatch]);

    const handlePreviousSong = useCallback(() => {
        stopPlaying();
        dispatch(setCurrentSong({ currentSong: audio.currentSong - 1 }));
    }, [dispatch, stopPlaying, audio.currentSong]);

    const handleForwardSong = useCallback(() => {
        stopPlaying();
        dispatch(setCurrentSong({ currentSong: audio.currentSong + 1 }));
    }, [dispatch, stopPlaying, audio.currentSong]);


    const handleTimeUpdate = useCallback(() => {
        dispatch(setCurrentTime({ currentTime: audioRef.current.currentTime }));
        // if (audioRef.current?.currentTime >= audio.duration) {
        //     stopPlaying();
        //     dispatch(setCurrentSong({ currentSong: audio.currentSong + 1 }));
        // }
        // }, [audio.currentSong, audio.duration, dispatch, stopPlaying]);
    }, [dispatch]);

    const handleProgressChange = useCallback((e) => {
        const newTime = e.target.value;
        dispatch(setCurrentTime({ currentTime: newTime }));
        audioRef.current.currentTime = newTime;
    }, [dispatch]);

    useEffect(() => {
        dispatch(setDuration({ duration: audioRef.current.duration ?? 0 }));
    }, [audioRef.current?.duration, dispatch]);

    useEffect(() => {
        const temp = audioRef.current;
        temp.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            temp.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [handleTimeUpdate]);

    return (
        <div className="music-player d-flex flex-row flex-lg-column mb-5 m-lg-0 p-0 pb-2">
            <audio ref={audioRef} src={songs[audio.currentSong].source} />
            <div className='col-4 col-lg-12'>
                <HeaderPlayerController song={{ ...{ audio }, rotated }} />
            </div>

            <div className='col-8 d-flex flex-column justify-content-end align-items-center'>
                <input
                    type="range"
                    className='progress mb-3'
                    value={audio.currentTime}
                    onChange={handleProgressChange}
                    max={audioRef.current?.duration ?? 0}
                />

                <div className='controls col-12 d-flex justify-content-evenly align-content-between'>
                    <button type="button" className="backward" onClick={handlePreviousSong}>
                        <FastRewind />
                    </button>
                    <button type="button" className="play-pause-btn" onClick={handlePlayClick}>
                        {controller.isPlaying ? <Pause /> : <PlayArrow />}
                    </button>
                    <button type="button" className="forward" onClick={handleForwardSong}>
                        <FastForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerController;
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