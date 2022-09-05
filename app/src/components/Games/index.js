import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";

require("./styles.scss");

export default function Games() {
    const navigate = useNavigate();
    return (
        <div className="Games">
            <div>Play games</div>
            <div className="Game_types">
                <Button onClick={() => navigate("/sudoku")}>Sudoku</Button>
                <Button onClick={() => navigate("/solitaire")}>
                    Solitaire
                </Button>
            </div>
        </div>
    );
}

Games.propTypes = {};
