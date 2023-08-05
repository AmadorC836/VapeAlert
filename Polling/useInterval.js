import {useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
        // console.log(callback)
        
    }, [callback]);
    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [callback, delay]);
}