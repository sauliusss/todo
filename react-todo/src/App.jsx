import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CSSBaseline from "@mui/material/CssBaseline";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./todolist";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
