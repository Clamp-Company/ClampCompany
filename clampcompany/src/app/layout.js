import "./globals.css";

export const metadata = {
  title: "Clamp Company",
  description: "Clamp Company official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
