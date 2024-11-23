import { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { Player } from './components/Player';
import './index.css';
import { Log } from './components/Log';
import { WINNING_COMBINATIONS } from './components/winning_combination';
import { GameOver } from './components/GameOver';

const initialGameBorad = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function deriveActivePlayer(gameTurn) {      // helper function
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2"
  });
  const [gameTurn, setGameTurn] = useState([]);
  //const [activePlayer, setActivePlayer] = useState('X');


  const activePlayer = deriveActivePlayer(gameTurn);

  const gameBoard = [...initialGameBorad.map(array => [...array])];

  for (const turn of gameTurn) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player

  }

  let winner;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }

  }

  const hasDraw = gameTurn.length === 9;

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurn((prevTurn) => {

      const currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn
      ];

      return updatedTurn;
    });
  }

  function gameOverHandler() {
    setGameTurn([])
  }

  function handleNameChanePlayer(symbol, newName) {
    setPlayers(prePlayer => {
      return {
        ...prePlayer,
        [symbol]: newName
      }
    });
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handleNameChanePlayer} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handleNameChanePlayer} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onGameOver={gameOverHandler} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App;
