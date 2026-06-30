import { withSharedState } from "@playhtml/react";

const Graveyard = withSharedState(
  { defaultData: { graves: {} } },
  ({ data, setData, ref }) => {

    const slots = Array.from({ length: 25 }, (_, i) => i);

    return (
      <div id="graveyard" ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
        {slots.map((slotIndex) => {
          const grave = Object.values(data.graves).find(g => g.slotIndex === slotIndex);
          return (
            <div key={slotIndex} style={{ border: "1px solid gray", padding: "8px", minHeight: "80px" }}>
              {grave ? `🪦 ${grave.title}` : "·"}
            </div>
          );
        })}
      </div>
    );
  }
);

export default Graveyard;