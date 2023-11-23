import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CardPack from "./components/CardPack/CardPack";

function App() {
  return (
    <>
      <Navbar />
      <CardPack />
    </>
  );
}

export default App;
