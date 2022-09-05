import React from "react";
import PropTypes from "prop-types";
import Sudoku from "../sudoku";
import Card from "../../shared/Card";

require("./styles.scss");

export default function Game(props) {
    const { game } = props;
    return (
        <div className="Game">
            <Card>
                {game === "sudoku" && <Sudoku />}
                {game === "solitaire" && <Sudoku />}
            </Card>
        </div>
    );
}

Game.propTypes = {
    game: PropTypes.string,
};
