import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import Clock from '../components/Clock/Clock'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const start = useCallback(() => { setActive(true) }, [],)

  const stop = useCallback(() => { setActive(false) }, [],)

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [time, active]);

  return (
    <div className={styles.container}>
      <Clock time={time} />
      <div className={styles.buttonArea}>
        <button className={styles.start} onClick={start}>Start</button>
        <button className={styles.stop} onClick={stop}>Stop</button>
      </div>

    </div>
  )
}

export default Home
