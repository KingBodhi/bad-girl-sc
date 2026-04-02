import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
