import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import TrendingMovie from "./components/TrendingMovie";
import UpcomingMovie from "./components/UpcomingMovie";

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-center relative">
     <Navbar/>
     <HomePage/>
     <TrendingMovie/>
     <UpcomingMovie/>
    </div>
  );
}

export default App;
