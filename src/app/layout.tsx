import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const fontSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kernia.vercel.app"),
  title: "Kernia — AI operations for IT support teams",
  description:
    "Kernia automates tickets, workflows and inventory for IT support teams, with analytics, uptime monitoring and compliance built in.",
  keywords: [
    "IT operations",
    "AI automation",
    "support tickets",
    "workflow automation",
    "inventory management",
    "uptime monitoring",
  ],
  openGraph: {
    type: "website",
    siteName: "Kernia",
    title: "Kernia — AI operations for IT support teams",
    description:
      "Automate tickets, workflows and inventory for IT support teams with AI-driven operations.",
    url: "https://kernia.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kernia — AI operations for IT support teams",
    description:
      "Automate tickets, workflows and inventory for IT support teams with AI-driven operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
