export default function Input({ label, id, error, ...props }) {
  return (
    <div className={error ? "invalid" : ""}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="error-text">{error && <p>{error}</p>}</div>
    </div>
  );
}
