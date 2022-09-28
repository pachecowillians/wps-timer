import React from 'react'
import ClockDigit from '../ClockDigit/ClockDigit';
import styles from './styles.module.css'

interface ClockProps {
    time: number;
    getDigits: () => {
        minutes: number[];
        seconds: number[];
    };
}

const Clock: React.FC<ClockProps> = ({ time, getDigits }) => {
    let { minutes, seconds } = getDigits();

    return (
        <div className={styles.container}>
            <ClockDigit digit={minutes[1]} />
            <ClockDigit digit={minutes[0]} />
            <span>:</span>
            <ClockDigit digit={seconds[1]} />
            <ClockDigit digit={seconds[0]} />
        </div>
    )
}

export default Clock;