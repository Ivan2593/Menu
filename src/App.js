import React from 'react';
import './styles/App.css';
import Card from "./components/Card";
import TopPanel from "./components/TopPanel";
import logo from "./Logo.png";

function App() {
  return (
    <div className="App">
        <img src={logo} className="logo" alt="Logo" />
        <TopPanel/>
        <Card card={"10.10.2021"}/>

    </div>
  );
}

export default App;
