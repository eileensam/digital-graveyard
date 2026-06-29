import { PlayProvider, CanToggleElement } from "@playhtml/react";

export function App() {
  return (
    <PlayProvider initOptions={{ cursors: { enabled: true } }}>
      <CanToggleElement>
        <button id="my-lamp">lamp</button>
      </CanToggleElement>
    </PlayProvider>
  );
}

export default App
