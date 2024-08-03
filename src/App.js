import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="bg-video">
        <source src={`${process.env.PUBLIC_URL}/night_sky.mp4`} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <header className="App-header">
        <h1>Nixor Tech Solutions</h1>
        <p>Launching Soon</p>
      </header>
    </div>
  );
}

export default App;
