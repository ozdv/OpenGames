import React from "react";
import Row from "./row";

require("./styles.scss");

export default function Grid(props) {
    const { setStartTimer } = props;
    const puzzle = [
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
    ];

    return (
        <div className="Grid">
            {puzzle.map((rowOfValues, i) => (
                <Row
                    setStartTimer={setStartTimer}
                    key={`row-${i}`}
                    values={rowOfValues}
                    rowIndex={i}
                />
            ))}
        </div>
    );
}
