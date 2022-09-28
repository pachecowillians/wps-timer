import React from 'react'
import ClockDigit from '../ClockDigit/ClockDigit';
import styles from './styles.module.css'

type ClockProps = {
    time: number;
}

const Clock: React.FC<ClockProps> = ({ time }) => {
    let seconds = time % 60
    let minutes = (time - seconds) / 60

    let secondsDigit1 = (seconds - (seconds % 10)) / 10
    let secondsDigit2 = seconds % 10

    let minutesDigit1 = (minutes - (minutes % 10)) / 10
    let minutesDigit2 = minutes % 10

    return (
        <div className={styles.container}>
            <ClockDigit digit={minutesDigit1} />
            <ClockDigit digit={minutesDigit2} />
            <span>:</span>
            <ClockDigit digit={secondsDigit1} />
            <ClockDigit digit={secondsDigit2} />
        </div>
    )
}

export default Clock;