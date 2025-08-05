export function Input({ placeholder, type = "text", defaultValue }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="border border-gray-300 p-2 rounded w-full mb-2"
    />
  );
}

