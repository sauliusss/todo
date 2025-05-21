import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CSSBaseline from "@mui/material/CssBaseline";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./todolist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <h1>TO-DO</h1>
      <TodoList />
    </>
  );
}

export default App;
