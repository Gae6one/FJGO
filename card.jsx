export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
