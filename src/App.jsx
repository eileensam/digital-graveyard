import { useState } from 'react';
import { PlayProvider } from "@playhtml/react";
import Graveyard from "./Graveyard.jsx";

function getESTHour() {
  return parseInt(
    new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', hour12: false })
  );
}

export function App() {
  const [isNight] = useState(() => {
    const hour = getESTHour();
    return hour < 6 || hour >= 20;
  });

  return (
    <PlayProvider initOptions={{ cursors: { enabled: true } }}>
      <div className={isNight ? 'night' : 'day'}>
        <div className="page">
          <h1 className="site-title">digital graveyard</h1>
          <p className="site-tagline">a place to bury the things that no longer serve you</p>
          <Graveyard />
          <a className="github" href="https://github.com/eileensam/digital-graveyard" target="_blank" rel="noopener noreferrer">digital-graveyard</a>
        </div>
      </div>
    </PlayProvider>
  );
}

export default App;
