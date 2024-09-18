export default function createBoard() {
    let board = [];
    for (let i = 0; i < 8; i++) {
        var row = []
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    row.push( { id: (8 * i) + j, Colour: "White", Team: null, Piece: null, Vision: [] } );

                } else {
                    row.push( { id: (8 * i) + j, Colour: "Black", Team: null, Piece: null, Vision: [] } );
                }
            } else {
                if (j % 2 === 1) {
                    row.push( { id: (8 * i) + j, Colour: "White", Team: null, Piece: null, Vision: [] } );
    
                } else {
                    row.push( { id: (8 * i) + j, Colour: "Black", Team: null, Piece: null, Vision: [] } );
                }
            }
        } 
        board.push(row);
    }
    return board;
}

