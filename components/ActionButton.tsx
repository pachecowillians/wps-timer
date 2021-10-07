import React from 'react'
import styles from '../styles/ActionButton.module.css'
import TimeOption from './TimeOption'

type ActionButtonProps = {
    start: () => void;
    stop: () => void;
    setTime: (time: number) => void;
    active: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ start, stop, active, setTime }) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <button onClick={active ? stop : start} className={active ? styles.active : styles.notActive}>
                    {/* <span>{!active ? '▶' : '🗙'}</span> */}
                    <div className={!active ? styles.start : styles.stop} />
                </button>

            </div>
            <div className={styles.timeOptions}>
                <TimeOption time={5} setTime={setTime} start={start} />
                <TimeOption time={10} setTime={setTime} start={start} />
                <TimeOption time={25} setTime={setTime} start={start} />
                <TimeOption time={30} setTime={setTime} start={start} />
                <TimeOption time={45} setTime={setTime} start={start} />
            </div>
        </div>
    )
}

export default ActionButton;