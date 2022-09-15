import React from "react";
import PropTypes from "prop-types";

require("./styles.scss");

export default function Navbar(props) {
    const { name } = props;

    return (
        <div className="Navbar">
            <div className="headerContent">
                <a className="Navbar_name" href="/">
                    Home
                </a>
                <a className="Navbar_name" href="/games">
                    Games
                </a>
            </div>
        </div>
    );
}

Navbar.propTypes = {
    name: PropTypes.string,
};
