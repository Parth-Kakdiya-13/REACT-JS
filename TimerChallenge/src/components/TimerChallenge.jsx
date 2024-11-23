import React, { useState, useRef } from 'react'
import ResultModel from './ResultModel';

export const TimerChallenge = ({ title, targetTime }) => {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function resetTimer() {
        setTimeRemaining(targetTime * 1000);

    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(preTimeRemaining => preTimeRemaining - 10)
        }, 10);

    }

    const handleStop = () => {
        clearInterval(timer.current)
        dialog.current.open();
    }

    return (
        <>
            <ResultModel ref={dialog} onResetTimer={resetTimer} targetTime={targetTime} remainingTime={timeRemaining} />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? "Stop" : "Start"} Challenge
                </button>
                <p className={timerIsActive ? 'active' : undefined}>
                    Time is Running.. / Time inactive
                </p>
            </section>
        </>
    )
}
