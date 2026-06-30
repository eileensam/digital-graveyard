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
        <Graveyard />
      </div>
    </PlayProvider>
  );
}

export default App;
