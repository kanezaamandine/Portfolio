import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import { Candal } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const candal = Candal({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-candal",
});

export const metadata: Metadata = {
  title: "My porfolio",
  description: "Powered by blink-tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${candal.variable} ${caveat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
