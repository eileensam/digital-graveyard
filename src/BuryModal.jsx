import { useState } from 'react';

function BuryModal({ onBury, onClose }) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-title">bury something</div>
        <input
          className="modal-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="what are you burying?"
        />
        <input
          className="modal-input"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="epitaph (optional)"
        />
        <div className="modal-actions">
          <button className="modal-button" onClick={onClose}>cancel</button>
          <button className="modal-button" onClick={() => onBury({ title, subtitle })}>bury</button>
        </div>
      </div>
    </div>
  );
}

export default BuryModal;
