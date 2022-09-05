import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import Sudoku from "./components/Games/sudoku";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    // {
    // 	path: '/games',
    // 	element: ,
    // },
    // {
    // 	path: '/sudoku',
    // 	element: <Sudoku/>,
    // },
];

const AppRoutes = () => {
    const elements = useRoutes(routes);
    return elements;
};

const AppRouter = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);

export default AppRouter;
