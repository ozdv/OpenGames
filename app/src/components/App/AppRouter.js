import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Games from "../Games";
import Game from "../games/game";

export default function AppRouter() {
    // console.log(process.env.PUBLIC_URL);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="games" element={<Games />} />
                <Route path="sudoku" element={<Game game="sudoku" />} />
                <Route path="*" element={<Games />} />
            </Routes>
        </BrowserRouter>
    );
}
