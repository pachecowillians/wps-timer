import React, { useCallback, useState } from 'react'
import styles from '../styles/ActionButton.module.css'
import TimeOption from './TimeOption'

type ActionButtonProps = {
    start: () => void;
    stop: () => void;
    setTime: (time: number) => void;
    active: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ start, stop, active, setTime }) => {
    const [opened, setOpened] = useState(false);

    function buttonAction() {
        if (active) {
            stop();
        } else {
            if (opened) {
                close();
            } else {
                open();
            }
        }
    }

    const close = useCallback(() => { setOpened(false); }, [],);
    const open = useCallback(() => { setOpened(true); }, [],);

    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <button onClick={buttonAction} className={active ? styles.active : styles.notActive}>
                    {
                        active ?
                            (
                                <div className={styles.stop} />
                            ) : opened ? (
                                <div className={styles.close} />
                            ) : (
                                <div className={styles.iconContainer}>
                                    <div className={styles.open}></div>
                                    <div className={styles.open}></div>
                                    <div className={styles.open}></div>
                                </div>
                            )
                    }
                </button>

            </div>
            <div className={styles.timeOptions}>
                <TimeOption time={5} setTime={setTime} start={start} opened={opened} close={close} />
                <TimeOption time={10} setTime={setTime} start={start} opened={opened} close={close} />
                <TimeOption time={25} setTime={setTime} start={start} opened={opened} close={close} />
                <TimeOption time={30} setTime={setTime} start={start} opened={opened} close={close} />
                <TimeOption time={45} setTime={setTime} start={start} opened={opened} close={close} />
            </div>
        </div>
    )
}

export default ActionButton;