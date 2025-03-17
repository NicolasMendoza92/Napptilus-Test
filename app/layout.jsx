import Navbar from "./components/Navbar";
import "./styles/main.scss";

export const metadata = {
  title: "ZARA CHALLENGE",
  description: "Napptilus test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header><Navbar/></header>
        <main className="main-layout">{children}</main>
      </body>
    </html>
  );
}
