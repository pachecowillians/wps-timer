import { Button, Dialog, DialogTitle, List, ListItem, ListItemText } from '@material-ui/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import Clock from '../components/Clock'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const start = useCallback(() => { setActive(true) }, [],)

    const stop = useCallback(() => { setActive(false); setTime(0) }, [],)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                if (time == 0) {
                    new Audio('/alarm.wav').play()

                    if (Notification.permission === 'granted') {
                        new Notification("The time is over!", {
                            body: `Take a break and start again!`
                        })
                    }
                    setActive(false);
                    setTime(0);
                } else {
                    setTime(time - 1);
                }
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [time, active]);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const times = [
        {
            value: 1 * 60,
            label: '1 minute',
        },
        {
            value: 5 * 60,
            label: '5 minutes',
        },
        {
            value: 10 * 60,
            label: '10 minutes',
        },
        {
            value: 15 * 60,
            label: '15 minutes',
        },
        {
            value: 25 * 60,
            label: '25 minutes',
        },
        {
            value: 30 * 60,
            label: '30 minutes',
        },
        {
            value: 35 * 60,
            label: '35 minutes',
        },
    ];

    const handleListItemClick = (value: number) => {
        setTime(value);
        setOpen(false);
        start();
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>WPS Timer</title>
            </Head>
            <div className={styles.contentArea}>
                <Clock time={time} />
            </div>
            <div>
                <Button
                    color={active ? "secondary" : "primary"}
                    onClick={active ? stop : handleOpen}
                    variant="contained"
                    style={{
                        marginTop: '50px',
                        width: '100px',
                        height: '50px',
                        fontSize: '30px'
                    }}
                >
                    {active ? '■' : '▶'}
                </Button>
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>How much time do you need?</DialogTitle>
                    <List>
                        {times.map(({ value, label }) => (
                            <ListItem autoFocus button onClick={() => handleListItemClick(value)} key={value}>
                                <ListItemText primary={label} />
                            </ListItem>
                        ))}
                    </List>
                </Dialog>
            </div>
            <footer>© 2021 - Willian Pacheco Silva</footer>
        </div>
    )
}

export default Home
