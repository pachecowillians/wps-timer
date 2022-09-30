import styles from './styles.module.css'

export type timeName = 'Pomodoro' | 'Short Break' | 'Long Break';

interface timeSelectorProps {
    name: timeName;
    selectedTime: string;
    active: boolean;
    selectTime: (name: timeName) => void;
}

export function TimeSelector({ active, name, selectedTime, selectTime }: timeSelectorProps) {
    let classes = [styles.container];
    selectedTime == name && classes.push(styles.selected);
    (selectedTime == name && active) && classes.push(styles.active);
    return <button className={classes.join(' ')} onClick={() => { selectTime(name) }}>
        <span>{name}</span>
    </button>
}