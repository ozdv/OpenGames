import React from "react";
import AppRouter from "./AppRouter";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <div className="App">
      <AppRouter />
      <Navbar />
    </div>
  );
}
