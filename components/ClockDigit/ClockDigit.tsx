import React from 'react'
import styles from './styles.module.css'

type ClockDigitProps = {
    digit: number;
}

const ClockDigit: React.FC<ClockDigitProps> = ({ digit }) => {
    return (
        <div className={styles.container}>
            {digit}
        </div>
    )
}

export default ClockDigit;