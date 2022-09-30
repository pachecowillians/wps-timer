import styles from './styles.module.css'

interface timerButtonProps {
    active: boolean;
    toggleActive: () => void;
}

export default function TimerButton({ active, toggleActive }: timerButtonProps) {
    let containerClasses = [styles.container];
    active && containerClasses.push(styles.active);
    return <button className={containerClasses.join(' ')} onClick={toggleActive}>
        <span className="material-symbols-outlined">
            {!active ? 'play_arrow' : 'stop'}
        </span>
    </button>
}