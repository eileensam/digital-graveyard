import { useState } from 'react';

function BuryModal({ onBury, onClose }) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="Subtitle" />
      <button onClick={() => onBury({ title, subtitle })}>Bury</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default BuryModal;
