function Grave({ title, subtitle, onDelete }) {
  return (
    <div className="gravestone">
      <button className="grave-delete" onClick={onDelete}>✕</button>
      <div className="grave-emoji">🪦</div>
      <div className="grave-title">{title}</div>
      {subtitle && <div className="grave-subtitle">{subtitle}</div>}
    </div>
  );
}

export default Grave;
