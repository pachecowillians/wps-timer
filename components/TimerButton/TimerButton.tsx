import styles from './styles.module.css'

export default function TimerButton() {
    return <div className={styles.container}>
        <span className="material-symbols-outlined">
            play_arrow
        </span>
    </div>
}