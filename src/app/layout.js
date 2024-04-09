import { Inter } from "next/font/google";
import GlobalStyles from "./GlobalStyles";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chattiest User",
  description: "Determine who is the chattiest user in the room",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}
