import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Glass Ivoire — Glass Manufacturer & Distributor",
  description:
    "Glass Ivoire provides premium glass manufacturing and distribution for construction, housing, and architectural projects in Abidjan and Côte d'Ivoire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-slate-800" suppressHydrationWarning>{children}</body>
    </html>
  );
}
