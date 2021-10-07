import React from 'react'
import styles from '../styles/ActionButton.module.css'

type ActionButtonProps = {
    start: () => void;
    stop: () => void;
    active: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ start, stop, active }) => {
    return (
        <div className={styles.container}>
            <button onClick={active ? stop : start} className={active ? styles.active : styles.notActive}>
                {/* <span>{!active ? '▶' : '🗙'}</span> */}
                <div className={!active ? styles.start : styles.stop} />
            </button>
        </div>
    )
}

export default ActionButton;