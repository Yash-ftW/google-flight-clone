import type { Metadata } from "next";
import { Roboto, Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const notoSans = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Google Flights - Find Cheap Flight Options & Track Prices",
  description:
    "You can find cheap flight deals to anywhere in the world on Google Flights. Just enter your departure city, choose Anywhere as the destination, and select",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
