import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./styles/main.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZARA CHALLENGE",
  description: "Napptilus test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header><Navbar/></header>
        <main className="main-layout">{children}</main>
      </body>
    </html>
  );
}
