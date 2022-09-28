import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import Clock from '../components/Clock'
import TimerButton from '../components/TimerButton/TimerButton'
import { timeName, TimeSelector } from '../components/TimeSelector/TimeSelector'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [selectedTime, setSelectedTime] = useState<timeName>('Pomodoro')

    const start = useCallback(() => { setActive(true) }, [],)

    const stop = useCallback(() => { setActive(false); setTime(0) }, [],)



    function selectTime(name: timeName) {
        setSelectedTime(name)
    }

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                if (time == 0) {

                    stop();

                    new Audio('/alarm.wav').play()

                    if (Notification.permission === 'granted') {
                        new Notification("The time is over!", {
                            body: `Take a break and start again!`
                        })
                    }
                } else {
                    setTime(time - 1);
                }
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [time, active]);

    let seconds = time % 60
    let minutes = (time - seconds) / 60

    let secondsDigit1 = (seconds - (seconds % 10)) / 10
    let secondsDigit2 = seconds % 10

    let minutesDigit1 = (minutes - (minutes % 10)) / 10
    let minutesDigit2 = minutes % 10

    return (
        <div className={styles.container}>
            <Head>
                <title>{minutesDigit1}{minutesDigit2}:{secondsDigit1}{secondsDigit2} | WPS Timer</title>
            </Head>
            <div className={styles.clockContainer}>
                <div className={styles.contentArea}>
                    <Clock time={time} />
                </div>
                <div className={styles.timeSelection}>
                    <TimeSelector name='Pomodoro' selectedTime={selectedTime} selectTime={selectTime} />
                    <TimeSelector name='Short Break' selectedTime={selectedTime} selectTime={selectTime} />
                    <TimeSelector name='Long Break' selectedTime={selectedTime} selectTime={selectTime} />
                </div>
                <TimerButton />
                <footer>© {new Date().getFullYear()} - Willian Pacheco Silva</footer>
            </div>
        </div>
    )
}

export default Home
