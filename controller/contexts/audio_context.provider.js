import React, { createContext, useEffect, useMemo } from 'react';
import { useCallback } from 'react';

export const audioContext = createContext();

export default function AudioContextProvider({ children }) {
    const [source, setSource] = React.useState("https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Besomorph-Coopex-Redemption.mp3");
    const setAudioSource = useCallback((source) => {
        console.log("setAudioSource", source);
        setSource(source);
    }, [])
    const obj = useMemo(() => (
        { source, setAudioSource, }), [source, setAudioSource]);
    return (
        <audioContext.Provider value={obj}>
            {children}
        </audioContext.Provider>

    );
}
