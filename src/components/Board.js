import React, { Component, useState } from 'react';
import Square from './Square'

class Board extends Component {
    renderSquare(i) {
        return (
            <Square
                key={"square" + i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    //extra#3 use loops to create rows.The first loop creates the squares and the second loop creates the row

    render() {
        //creates empty array to store the rows
        const row = [];
        //used to set the key of the currect square because React will go crazy if there are no keys for similar child elements
        let k = 0;
        //the first for loop creates the number of rows(columns)
        for (let i = 0; i < 3; i++) {
            const col = [];
            //the second for loop fills the columns with a square
            for (let j = 0; j < 3; j++) {
                //adds the currect square to the row
                col.push(this.renderSquare(k));
                //moves onto adding the next square
                k++;
            }
            row.push(<div key={k} className="board-row">{col}</div>);
        }
        return (
            <div>
                {row}
            </div>
        );
    }
}

export default Board;
