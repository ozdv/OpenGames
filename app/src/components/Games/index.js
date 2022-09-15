import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import Card from "../shared/Card";

require("./styles.scss");

export default function Games() {
    const navigate = useNavigate();
    return (
        <div className="Games">
            <Card>
                <div className="Games__options">Games: </div>
                <div className="Game__types">
                    <Button onClick={() => navigate("/sudoku")}>Sudoku</Button>
                    <Button onClick={() => navigate("/solitaire")}>
                        Solitaire
                    </Button>
                </div>
            </Card>
        </div>
    );
}

Games.propTypes = {};
