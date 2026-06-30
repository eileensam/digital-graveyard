import { useState } from 'react';
import { withSharedState } from "@playhtml/react";
import BuryModal from './BuryModal.jsx';

const Graveyard = withSharedState(
  { defaultData: { graves: {} } },
  ({ data, setData, ref }) => {
    const [modalOpen, setModalOpen] = useState(false);

    function handleBury({ title, subtitle }) {
      const id = crypto.randomUUID();
      const occupiedSlots = new Set(Object.values(data.graves).map(g => g.slotIndex));
      const firstEmpty = Array.from({ length: 25 }, (_, i) => i).find(i => !occupiedSlots.has(i));
      if (firstEmpty === undefined) return;
      setData((draft) => {
        draft.graves[id] = { title, subtitle, slotIndex: firstEmpty, buriedAt: Date.now() };
      });
      setModalOpen(false);
    }

    const slots = Array.from({ length: 25 }, (_, i) => i);

    return (
      <div id="graveyard" ref={ref}>
        {modalOpen && <BuryModal onBury={handleBury} onClose={() => setModalOpen(false)} />}
        <button onClick={() => setModalOpen(true)}>Bury Something</button>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
          {slots.map((slotIndex) => {
            const entry = Object.entries(data.graves).find(([, g]) => g.slotIndex === slotIndex);
            const graveId = entry?.[0];
            const grave = entry?.[1];
            return (
              <div key={slotIndex} style={{ border: "1px solid gray", padding: "8px", minHeight: "80px" }}>
                {grave ? (
                  <div>
                    <div>🪦</div>
                    <div>{grave.title}</div>
                    <div>{grave.subtitle}</div>
                    <button onClick={() => setData((draft) => { delete draft.graves[graveId]; })}>x</button>
                  </div>
                ) : "·"}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

export default Graveyard;
