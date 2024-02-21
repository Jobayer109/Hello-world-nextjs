import { Inter } from "next/font/google";
import Footer from "./components/footer/page";
import Navbar from "./components/nav/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hello world",
  description: "This is a simple next js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
