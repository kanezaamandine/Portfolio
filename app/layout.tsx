import type { Metadata } from "next";
import { Jost, Caveat } from '@next/font/google';
import './globals.css';

const jost = Jost({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
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
        className={`${jost.variable} ${caveat.variable} font-jost antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
