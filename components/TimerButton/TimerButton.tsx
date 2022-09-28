import styles from './styles.module.css'

export default function TimerButton() {
    return <button className={styles.container}>
        <span className="material-symbols-outlined">
            play_arrow
        </span>
    </button>
}