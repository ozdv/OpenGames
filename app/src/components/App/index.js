import React from "react";
import Navbar from "../shared/Navbar";
import AppRouter from "./AppRouter";

require("./styles.scss");

export default function App() {
    return (
        <div className="App">
            <Navbar name="Open Games" />
            <div className="App__body">
                <AppRouter />
            </div>
        </div>
    );
}
