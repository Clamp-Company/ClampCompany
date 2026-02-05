import "./globals.css";
import Navigation from "@/Components/global-components/nav";

export const metadata = {
  title: "Clamp Company",
  description: "Clamp Company official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="" style={{ padding: "clamp(1.5rem, 5vw, 3rem)" }}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
