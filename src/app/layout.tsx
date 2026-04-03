import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIToolRadar - Navigate the AI Tool Landscape",
  description: "Expert reviews and comparisons of the best AI tools. Find the perfect AI solution for your use case in 2026.",
  keywords: ["AI tools", "AI reviews", "AI comparison", "best AI tools 2026"],
  openGraph: {
    title: "AIToolRadar - Navigate the AI Tool Landscape",
    description: "Expert reviews and comparisons of the best AI tools",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
