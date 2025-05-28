import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Portfolio | Alex Escobar",
  description: "Portfolio by Alexander Escobar",
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
