"use client";

import { useState } from "react";

export function Select({ value, onValueChange, children }) {
  const [selected, setSelected] = useState(value || "");

  const handleChange = (e) => {
    setSelected(e.target.value);
    if (onValueChange) onValueChange(e.target.value);
  };

  return (
    <select
      className="w-full p-2 border border-gray-300 rounded-md"
      value={selected}
      onChange={handleChange}
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
