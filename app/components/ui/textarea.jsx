"use client";

export function Textarea({ value, onChange, placeholder, readOnly, className }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`w-full border border-gray-300 rounded-md p-2 ${className || ""}`}
    />
  );
}
