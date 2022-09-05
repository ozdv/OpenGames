import React from "react";
import Navbar from "../shared/Navbar";
import AppRouter from "./AppRouter";

require("./styles.scss");

export default function App() {
    return (
        <div className="App">
            <div className="content">
                <AppRouter />
            </div>
        </div>
    );
}
