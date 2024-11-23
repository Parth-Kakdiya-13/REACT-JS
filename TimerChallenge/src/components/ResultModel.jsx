import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModel = forwardRef(function ResultModel({ targetTime, remainingTime, onResetTimer }, ref) {

    const dialogRef = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })



    return (
        <dialog className='result-modal' ref={dialogRef} onClose={onResetTimer}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>Your target time <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with{' '}<strong>{formattedRemainingTime}{' '}seconds left.</strong></p>
            <form method='dialog' onSubmit={onResetTimer}>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModel;