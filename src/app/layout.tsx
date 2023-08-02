import { type Metadata } from "next";
import "./globals.scss";
import { Oswald, Rampart_One, Inter } from "next/font/google";

const oswald = Oswald({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-oswald",
});
const rampart = Rampart_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart",
});
const para = Inter({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-para",
});
const header = Inter({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-header",
});

export const metadata: Metadata = {
  title: "Open Mic Coffeehouse",
  description: "A coffeehouse in Halifax NS",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎤</text></svg>",
  },
  creator: "@bozdoz",
  colorScheme: "dark",
  keywords: ["halifax", "nova scotia", "coffeehouse", "open mic"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${rampart.variable} ${para.variable} ${header.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
