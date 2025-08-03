export function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="border border-gray-300 rounded px-3 py-2 w-full"
      {...props}
    />
  );
}
