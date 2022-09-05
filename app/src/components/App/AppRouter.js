import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Home";
import Games from "../Games";
import Navbar from "../shared/Navbar";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar name="Open Games" />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="games" element={<Games />} />
                <Route exact path="*" element={<Games />} />
            </Routes>
        </BrowserRouter>
    );
}
