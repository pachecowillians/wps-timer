import React from 'react'
import styles from '../styles/TimeOption.module.css'

type TimeOptionProps = {
    time: number;
    setTime: (time: number) => void;
    start: () => void;
}

const TimeOption: React.FC<TimeOptionProps> = ({ time, setTime, start }) => {
    function startClock() {
        setTime(time * 60);
        start();
    }

    return (
        <>
            <div className={styles.container} onClick={startClock}>
                {time} min
            </div>
        </>
    )
}

export default TimeOption;