import "./globals.css";
export const metadata = {
  title: "Best Fintech Apps for Africans",
  description: "Compare African fintech apps and save money."
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}