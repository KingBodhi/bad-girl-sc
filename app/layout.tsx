import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bad Girl Strength Club — You Were Never Meant to Stay Small",
  description:
    "Stop training to shrink. Start training to dominate. The strength program built for women who refuse to stay small.",
  openGraph: {
    title: "Bad Girl Strength Club",
    description: "You Were Never Meant to Stay Small.",
    siteName: "Bad Girl Strength Club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${archivoBlack.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
