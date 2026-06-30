import { PlayProvider } from "@playhtml/react";
import Graveyard from "./Graveyard.jsx";

export function App() {
  return (
    <PlayProvider initOptions={{ cursors: { enabled: true } }}>
      <Graveyard />
    </PlayProvider>
  );
}

export default App;
