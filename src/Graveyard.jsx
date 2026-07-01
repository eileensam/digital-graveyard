import { useState } from 'react';
import { withSharedState } from "@playhtml/react";
import BuryModal from './BuryModal.jsx';
import Grave from './Grave.jsx';

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

    function handleDelete(graveId) {
      setData((draft) => { delete draft.graves[graveId]; });
    }

    const slots = Array.from({ length: 25 }, (_, i) => i);

    return (
      <div id="graveyard" ref={ref}>
        {modalOpen && <BuryModal onBury={handleBury} onClose={() => setModalOpen(false)} />}
        {!modalOpen && (
          <button className="bury-button" onClick={() => setModalOpen(true)}>
            bury something
          </button>
        )}
        <div className="grid">
          {slots.map((slotIndex) => {
            const entry = Object.entries(data.graves).find(([, g]) => g.slotIndex === slotIndex);
            const graveId = entry?.[0];
            const grave = entry?.[1];
            return (
              <div key={slotIndex}>
                {grave
                  ? <Grave title={grave.title} subtitle={grave.subtitle} onDelete={() => handleDelete(graveId)} />
                  : <div className="slot-empty" />
                }
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

export default Graveyard;
