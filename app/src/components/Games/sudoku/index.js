import React from "react";
import Grid from "./grid";

require("./styles.scss");

export default function Sudoku(props) {
    return (
        <div className="Sudoku">
            <div className="Sudoku_board">
                <Grid />
            </div>
        </div>
    );
}
