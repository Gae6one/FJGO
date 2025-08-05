"use client";

export function Input({ type = "text", value, onChange, placeholder, ...props }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded"
      {...props}
    />
  );
}
