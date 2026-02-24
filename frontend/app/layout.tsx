import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hack.IT@BVP 3.0 | Ideathon & Hackathon | BVCOE Delhi",
  description:
    "Hack.IT@BVP 3.0 — A two-phase Ideathon & Hackathon on Digital Trust & Data Accountability powered by the DPDP Act, 2023. Organized by IT Dept, Bharati Vidyapeeth's College of Engineering, New Delhi. 11 April & 18 April 2026. Prize pool ₹1,15,000+.",
  keywords: [
    "Hack.IT BVP",
    "Hackathon Delhi 2026",
    "BVCOE Hackathon",
    "DPDP Act Hackathon",
    "Ideathon 2026",
    "IT Department BVCOE",
    "Digital Trust Hackathon",
    "Data Privacy Hackathon India",
  ],
  authors: [{ name: "IT Department, BVCOE" }],
  openGraph: {
    title: "Hack.IT@BVP 3.0 | Ideathon & Hackathon – 11 & 18 April 2026",
    description:
      "Compete for ₹1,15,000+ in prizes. Join an innovation event on Digital Trust & Data Accountability. Organized by BVCOE Delhi IT Department.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
