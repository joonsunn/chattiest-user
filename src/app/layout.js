"use client";

import { Inter } from "next/font/google";
import GlobalStyles from "theme/GlobalStyles";
import MyThemeProvider from "theme/theme";

export const runtime = "edge";

// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Chattiest User",
//   description: "Determine who is the chattiest user in the room",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyThemeProvider>
        <body>
          <GlobalStyles />
          {children}
        </body>
      </MyThemeProvider>
    </html>
  );
}
