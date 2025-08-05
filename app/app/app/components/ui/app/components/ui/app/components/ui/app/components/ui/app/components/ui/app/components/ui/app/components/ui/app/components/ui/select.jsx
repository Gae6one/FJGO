"use client";

export function Select({ value, onValueChange, children }) {
  return (
    <select
      className="w-full border border-gray-300 rounded-md p-2"
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
