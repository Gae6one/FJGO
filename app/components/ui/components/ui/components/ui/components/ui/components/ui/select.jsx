export function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
    >
      {children}
    </select>
  );
}
