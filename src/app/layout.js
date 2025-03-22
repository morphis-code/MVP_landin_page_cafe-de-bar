import "./globals.css";

export const metadata = {
  title: "Café de Bar",
  description: "Um site de descontos para você aproveitar...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
