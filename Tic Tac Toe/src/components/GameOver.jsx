import React from 'react'

export const GameOver = ({ winner, onGameOver }) => {
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw</p>}
            <p><button onClick={onGameOver}>Rematch!</button></p>
        </div>
    )
}
