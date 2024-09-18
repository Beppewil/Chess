import React from 'react';
import createBoard from './createBoard';
import { useState } from 'react';

export default function RenderBoard() {
    const [board, setBoard] = useState(createBoard());

    const handleClick = (x, y) => {
        const newBoard = [...board];
        newBoard[x][y].Colour = "red";
        setBoard(newBoard);
    }

    const table = [];
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            table.push(
                <button
                    key={board[x][y].id}
                    onClick={() => handleClick(x, y)}
                    style={{ backgroundColor: board[x][y].Colour }}
                />
            );
        }
        table.push(<br></br>)
    }

    return <div class="chessboard">{table}</div>;
}
