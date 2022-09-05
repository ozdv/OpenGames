import React from "react";
import PropTypes from "prop-types";

require("./styles.scss");

export default function Navbar(props) {
    const { name } = props;

    return (
        <div className="Navbar">
            <header>
                <a className="Navbar_name" href="/">
                    Home
                </a>
                <a className="Navbar_name" href="/games">
                    Games
                </a>
            </header>
        </div>
    );
}

Navbar.propTypes = {
    name: PropTypes.string,
};
