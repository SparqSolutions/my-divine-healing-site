import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ChatButton from "@/components/ChatButton";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divine Healing Therapy - Christian Online Counseling",
  description: "Professional Christian therapy services with emphasis on healing through faith and the love of Jesus Christ. Remote counseling sessions available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${playfairDisplay.variable} antialiased bg-divine-white`}
      >
        <Navigation />
        {children}
        <ChatButton />
      </body>
    </html>
  );
}
