import React from 'react'

type ClockDigitProps = {
    digit: number;
}

const ClockDigit: React.FC<ClockDigitProps> = ({ digit, children }) => {
    return (
        <>
            <div>{digit}</div>
        </>
    )
}

export default ClockDigit;