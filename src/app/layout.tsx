
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Billal Hossain | Full Stack Software Engineer",
    template: "%s | Billal Hossain",
  },
  description:
    "Explore the portfolio of Billal Hossain, a Full Stack Software Engineer and AIUB graduate. Discover projects, technical skills, and ways to connect.",
  applicationName: "Billal Hossain Portfolio",
  authors: [{ name: "Billal Hossain" }],
  keywords: [
    "Billal Hossain",
    "Full Stack Software Engineer",
    "Software Engineer Portfolio",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "C#",
    ".NET Core",
    "MongoDB",
  ],
  openGraph: {
    title: "Billal Hossain | Full Stack Software Engineer",
    description:
      "A creative portfolio showcasing software projects, technical skills, and my journey as a Full Stack Software Engineer.",
    type: "website",
    locale: "en_US",
    siteName: "Billal Hossain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billal Hossain | Full Stack Software Engineer",
    description:
      "Explore my software projects, technical skills, and development journey.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col bg-[#08090b] text-zinc-100"
        style={{
          fontFamily: "var(--font-geist-sans), Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
