import React, { useState } from "react";
import Grid from "./grid";
import Button from "../../shared/Button";
import { useNavigate } from "react-router-dom";

require("./styles.scss");

export default function Sudoku() {
    const navigate = useNavigate();
    const [difficulty, setDifficulty] = useState("Easy");
    const [page, setPage] = useState(2);

    return (
        <div className="Sudoku">
            {page === 1 && (
                <div className="sudoku__difficulty">
                    <Button
                        className="backButton"
                        onClick={() => navigate("/games")}
                    >
                        Back
                    </Button>
                    <div className="Sudoku__difficultyLabel">
                        Select Difficulty:
                    </div>
                    <div className="Sudoku__options">
                        <Button
                            onClick={() => {
                                setDifficulty("Easy");
                                setPage(2);
                            }}
                        >
                            Easy
                        </Button>
                        <Button
                            onClick={() => {
                                setDifficulty("Medium");
                                setPage(2);
                            }}
                        >
                            Medium
                        </Button>
                        <Button
                            onClick={() => {
                                setDifficulty("Hard");
                                setPage(2);
                            }}
                        >
                            Hard
                        </Button>
                    </div>
                </div>
            )}
            {page === 2 && (
                <div className="Sudoku__main">
                    <Button className="backButton" onClick={() => setPage(1)}>
                        Back
                    </Button>
                    <div className="Sudoku__label">Sudoku: {difficulty}</div>
                    <div className="Sudoku__board">
                        <Grid />
                    </div>
                </div>
            )}
        </div>
    );
}
