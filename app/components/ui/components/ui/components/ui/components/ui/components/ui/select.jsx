export function Select({ options = [], defaultValue }) {
  return (
    <select
      defaultValue={defaultValue}
      className="border border-gray-300 p-2 rounded w-full mb-2"
    >
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

