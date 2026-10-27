export default function Filters({ filter, setFilter }) {
  return (
    <div className="filters">
      {["All", "Active", "Completed"].map((f) => (
        <button key={f} className={filter === f ? "on" : ""} onClick={() => setFilter(f)}>
          {f}
        </button>
      ))}
    </div>
  );
}