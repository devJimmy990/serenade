import Image from 'next/image';
import { Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying } from '@/controller/slices/controller_slice';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PlayArrow, FastRewind, FastForward, Pause } from '@mui/icons-material';
import { setAudioReference, setCurrentSong, setCurrentTime, setDuration } from '@/controller/slices/audio_slice';

const BottomPlayerController = () => {
    const dispatch = useDispatch();
    const [rotated, setRotated] = useState(false);
    const audio = useSelector(state => state.audio);
    const controller = useSelector(state => state.controller);

    const [forward, setForward] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animatedTitle, setAnimatedTitle] = useState(controller.isPlaying ? "" : audio.title);

    const resetAnimation = useCallback(() => {
        setAnimatedTitle(audio.title);
        setCurrentIndex(0);
        setForward(true);
    }, [audio.title]);

    // useEffect(() => {
    //     if (controller.isPlaying) {
    //         // dispatch(setAudioReference)
    //         audio.reference.currentTime = audio.currentTime;
    //         audio.reference.play();
    //     }
    // }, [audio.currentTime, audio.reference, controller.isPlaying]);

    // useEffect(() => {
    //     const animateText = () => {
    //         if (forward) {
    //             if (currentIndex < audio.title.length) {
    //                 setAnimatedTitle((prevTitle) => prevTitle + audio.title[currentIndex]);
    //                 setCurrentIndex((prevIndex) => prevIndex + 1);
    //             } else { setForward(false); }
    //         } else {
    //             if (currentIndex > 1) {
    //                 setAnimatedTitle((prevTitle) => prevTitle.slice(0, -1));
    //                 setCurrentIndex((prevIndex) => prevIndex - 1);
    //             } else { setForward(true); }
    //         }
    //     };
    //     const interval = controller.isPlaying ? setInterval(animateText, 350) : null;
    //     return () => clearInterval(interval);
    // }, [audio.title, controller.isPlaying, currentIndex, forward]);


    const stopPlaying = useCallback(() => {
        dispatch(setIsPlaying({ isPlaying: false }));
        setRotated(false);
    }, [dispatch]);

    const handlePlayClick = useCallback(() => {
        if (controller.isPlaying) {
            resetAnimation();
            audio.reference?.pause();
            setRotated(false);
        } else {
            setAnimatedTitle("");
            audio.reference?.play();
            setRotated(true);
        }
        dispatch(setIsPlaying({ isPlaying: !controller.isPlaying }));
    }, [controller.isPlaying, dispatch, resetAnimation, audio.reference]);

    const handlePreviousSong = useCallback(() => {
        stopPlaying();
        dispatch(setCurrentSong({ currentSong: audio.currentSong - 1 }));
    }, [dispatch, stopPlaying, audio.currentSong]);

    const handleForwardSong = useCallback(() => {
        stopPlaying();
        dispatch(setCurrentSong({ currentSong: audio.currentSong + 1 }));
    }, [dispatch, stopPlaying, audio.currentSong]);


    const handleTimeUpdate = useCallback(() => {
        dispatch(setCurrentTime({ currentTime: audio.reference?.currentTime }));
        if (audio.reference?.currentTime >= audio.duration) {
            stopPlaying();
            dispatch(setCurrentSong({ currentSong: audio.currentSong + 1 }));
        }
    }, [audio.currentSong, audio.duration, audio.reference?.currentTime, dispatch, stopPlaying]);

    const handleProgressChange = useCallback((e) => {
        const newTime = e.target.value;
        dispatch(setCurrentTime({ currentTime: audio.reference?.currentTime }));
        audio.reference.currentTime = newTime;
    }, [audio.reference, dispatch]);

    useEffect(() => {
        const temp = audio?.reference;
        temp?.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            temp?.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [audio?.reference, handleTimeUpdate]);


    return (
        <Card elevation={4} className="music-player d-flex flex-row justify-content-between">
            <div className='album-cover'>
                <Image width={120} height={120} className='col-12' src={audio.cover} alt={audio.title}
                    style={{ animationPlayState: rotated ? "running" : "paused", }}
                />
                <span className='point' ></span>
            </div>
            <div className='d-flex flex-row justify-content-center '>

                <div>
                    <h2>{animatedTitle}</h2>
                    <p>{audio.name}</p>

                </div>
                <div>
                    <input
                        className='progress'
                        type="range"
                        value={audio.currentTime}
                        max={audio.reference?.duration ?? 0}
                        onChange={handleProgressChange}
                    />

                    <div className='controls'>
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
            <div></div>
        </Card>
    );
};

export default BottomPlayerController;
