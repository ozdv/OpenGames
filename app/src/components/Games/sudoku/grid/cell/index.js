import React from "react";

require("./styles.scss");

export default function Cell(props) {
    const { value } = props;
    console.log("cell", value);
    return <div className="Cell">{value}</div>;
}
