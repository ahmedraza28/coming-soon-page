// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <video autoPlay muted loop id="bg-video">
//         <source src={`${process.env.PUBLIC_URL}/night_sky.mp4`} type="video/mp4" />
//         Your browser does not support HTML5 video.
//       </video>
//       <header className="App-header">
//         <h1>Nixor Tech Solutions</h1>
//         <p>Launching Soon</p>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const video = document.getElementById('bg-video');
    // Add event listener to ensure video plays on user interaction
    const playVideo = () => {
      if (video) {
        video.play().catch((error) => {
          console.error('Video playback failed:', error);
        });
      }
    };

    window.addEventListener('touchstart', playVideo);

    return () => {
      window.removeEventListener('touchstart', playVideo);
    };
  }, []);

  return (
    <div className="App">
      <video autoPlay muted loop preload="auto" id="bg-video">
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
