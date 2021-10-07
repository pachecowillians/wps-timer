import React from 'react'
import styles from '../styles/TimeOption.module.css'

type TimeOptionProps = {
    time: number;
    opened: boolean;
    setTime: (time: number) => void;
    start: () => void;
    close: () => void;
}

const TimeOption: React.FC<TimeOptionProps> = ({ time, setTime, start, opened, close }) => {
    
    function startClock() {
        setTime(time * 60);
        close();
        start();
    }

    return (
        <>
            <div className={styles.container} onClick={startClock} style={!opened ? { opacity: 0 } : { opacity: 1 }}>
                {time} min
            </div>
        </>
    )
}

export default TimeOption;