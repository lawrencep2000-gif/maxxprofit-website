import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "MaxxProfit — AI-Powered Reseller Assistant",
  description: "Buy smarter, sell faster, and grow your resale business with AI item recognition, live market analysis, MaxxScore, inventory, and analytics.",
  openGraph: {
    title: "MaxxProfit",
    description: "AI-powered reseller assistant for smarter flips.",
    url: "https://maxxprofit.app",
    siteName: "MaxxProfit",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxxProfit",
    description: "AI-powered reseller assistant for smarter flips."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
