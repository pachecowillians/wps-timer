import React from 'react'

type ClockProps = {
    time: number;
}

const Clock: React.FC<ClockProps> = ({ time, children }) => {

    let hours = time - (time % 3600)
    let minutes = (time - (time - (hours * 3600)) % 60) / 60
    let seconds = time - hours * 3600 - minutes * 60

    return (
            <div>
                <div>{time}</div>
                <div style={{ margin: '20px' }}>{hours}</div>
                <div style={{ margin: '20px' }}>{minutes}</div>
                <div style={{ margin: '20px' }}>{seconds}</div>
            </div>
    )
}

export default Clock;