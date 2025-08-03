export const metadata = {
  title: "FJGO – Finder Job Gae One",
  description: "App per trovare lavoro da remoto per categorie protette",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
