import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://badgirlstrengthclub.com"),
  title: "Bad Girl Strength Club — You Were Never Meant to Stay Small",
  description:
    "Stop training to shrink. Start training to dominate. The strength program built for women who refuse to stay small.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Bad Girl Strength Club",
    description: "You Were Never Meant to Stay Small. Join the standard.",
    url: "https://badgirlstrengthclub.com",
    siteName: "Bad Girl Strength Club",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 630,
        alt: "Bad Girl Strength Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bad Girl Strength Club",
    description: "You Were Never Meant to Stay Small.",
    images: ["/card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${poppins.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col max-w-[2000px] mx-auto">{children}</body>
    </html>
  );
}
