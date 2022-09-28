import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import Clock from '../components/Clock/Clock'
import TimerButton from '../components/TimerButton/TimerButton'
import { timeName, TimeSelector } from '../components/TimeSelector/TimeSelector'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);
    const [selectedTime, setSelectedTime] = useState<timeName>('Pomodoro')

    const start = useCallback(() => { setActive(true) }, [],)

    const stop = useCallback(() => { setActive(false); setTime(0) }, [],)

    function getDigits() {
        let seconds = time % 60
        let minutes = (time - seconds) / 60

        let secondsDigits = [0, 0]
        let minutesDigits = [0, 0]

        secondsDigits[1] = (seconds - (seconds % 10)) / 10
        secondsDigits[0] = seconds % 10

        minutesDigits[1] = (minutes - (minutes % 10)) / 10
        minutesDigits[0] = minutes % 10

        return {
            minutes: minutesDigits,
            seconds: secondsDigits
        };
    }

    function selectTime(name: timeName) {
        setSelectedTime(name)
        if (name == 'Pomodoro') {
            setTime(25 * 60);
        } else if (name == 'Long Break') {
            setTime(15 * 60);
        } else if (name == 'Short Break') {
            setTime(5 * 60);
        }
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

    let { minutes, seconds } = getDigits();

    return (
        <div className={styles.container}>
            <Head>
                <title>{minutes[1]}{minutes[0]}:{seconds[1]}{seconds[0]} | WPS Timer</title>
            </Head>
            <div className={styles.clockContainer}>
                <div className={styles.contentArea} onClick={start}>
                    <Clock time={time} getDigits={getDigits}/>
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
