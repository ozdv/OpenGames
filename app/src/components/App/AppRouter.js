import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Home";
import Games from "../Games";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="games" element={<Games />} />
            </Routes>
        </BrowserRouter>
    );
}
