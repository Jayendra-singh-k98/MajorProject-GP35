import "./globals.css";
import Providers from "../components/common/Providers";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export const metadata = { title: "AgriDetect AI", description: "Explainable AI dashboard for plant disease detection (frontend demo)" };
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><Providers><Navbar />{children}<Footer /></Providers></body>
    </html>
  );
}