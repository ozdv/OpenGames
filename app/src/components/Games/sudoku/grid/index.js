import React from "react";
import Row from "./row";

require("./styles.scss");

export default function Grid() {
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
                <Row key={`row-${i}`} values={rowOfValues} rowIndex={i} />
            ))}
        </div>
    );
}
