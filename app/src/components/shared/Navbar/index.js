import React from "react";
import PropTypes from "prop-types";

require("./styles.scss");

export default function Navbar(props) {
    const { name, link } = props;

    return (
        <div className="Navbar">
            <header>
                <div className="Navbar_name">{name}</div>
            </header>
        </div>
    );
}

Navbar.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
};
