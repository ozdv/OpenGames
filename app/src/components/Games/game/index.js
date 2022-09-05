import React from "react";
import Sudoku from "../sudoku";

require("./styles.scss");

export default function Game() {
    return (
        <div className="Game">
            <div className="Game_header">header</div>
            <div className="Game_current">
                <Sudoku />
            </div>
        </div>
    );
}

Game.propTypes = {};
