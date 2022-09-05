import React from "react";
import Cell from "../cell";

require("./styles.scss");

export default function Row(props) {
    const { values } = props;
    return (
        <div className="Row">
            {values.map((e) => (
                <Cell value={e} />
            ))}
        </div>
    );
}
