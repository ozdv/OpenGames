import React, { useState } from "react";

require("./styles.scss");

export default function Cell(props) {
    const { value, setStartTimer } = props;
    const [cellValue, setCellValue] = useState(value);

    const cellValueHandler = (event) => {
        setStartTimer(true);
        if (event.nativeEvent.data === null) {
            setCellValue("");
        } else if (event.nativeEvent.data === 0) {
            setCellValue(cellValue);
        } else {
            const newValue = event.nativeEvent.data.replace(
                /[^1-9]/gi,
                cellValue
            );
            setCellValue(newValue);
        }
    };
    return (
        <div className="Cell">
            <input
                className="cellInput"
                type="text"
                value={cellValue === 0 ? "" : cellValue}
                onChange={cellValueHandler}
            ></input>
        </div>
    );
}
