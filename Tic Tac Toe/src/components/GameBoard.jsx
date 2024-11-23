



export const GameBoard = ({ onSelectSquare, board }) => {

    // const [gameBoard, setGameBoard] = useState(initialGameBorad);

    // function handlerSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((preGameBoard) => {
    //         const updatedBoard = [...preGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //         // preGameBoard[rowIndex][colIndex] = activePlayerSymbol
    //         // return preGameBoard;
    //     })
    //     onSelectSquare();



    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>)}
                    </ol>
                </li>)}
        </ol>
    );
}
