import React from "react";
import Cell from "../cell";

require("./styles.scss");

export default function Row(props) {
    const { values, rowIndex } = props;
    return (
        <div className="Row">
            {values.map((e, i) => (
                <Cell
                    key={`cell-${i}`}
                    value={e}
                    rowIndex={rowIndex}
                    cellIndex={i}
                />
            ))}
        </div>
    );
}
