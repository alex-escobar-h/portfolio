import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Portfolio | Alex Escobar",
  description: "Portfolio by Alexander Escobar",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
