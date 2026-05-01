import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Pertiwi Jungle Swing",
  description: "A More Beautiful Swing Experience in Bali"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorant.variable} font-sans`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
