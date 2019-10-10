import React from "react";
import "./App.css";

import ApodMain from './components/ApodMain.js';

// import ApodCard from './components/ApodCard.js';

function App() {
  return (
    <div className="App">
      <h1>Nasa Astronomy Photo of the Day</h1>
      <ApodMain />
    </div>
  );
}

export default App;