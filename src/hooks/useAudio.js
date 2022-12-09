import { useEffect } from 'react';

const useAudio = (src, { volume = 1, playbackRate = 1 }) => {
    const audio = new Audio(src);

    useEffect(() => {
        audio.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        audio.current.playbackRate = playbackRate;
    }, [playbackRate]);

    return audio.current;
};

export default useAudio;
