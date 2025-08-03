export function Select({ value, onValueChange, children }) {
  return (
    <select
      className="border border-gray-300 rounded px-3 py-2 w-full"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
