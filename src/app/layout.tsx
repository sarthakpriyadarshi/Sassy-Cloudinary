import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

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
  title: "Sassy Cloudinary",
  description: "An AI Based Video Compression Tool and Social Share",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Sassy Cloudinary",
    description: "An AI Based Video Compression Tool and Social Share",
    url: "cloudinary.devsyn.tech",
    siteName: "Sassy Cloudinary",
    images: [
      {
        url: "https://cloudinary.devsyn.tech/og-image.png",
        width: 800,
        height: 600,
        alt: "Sassy Cloudinary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sassy Cloudinary",
    description: "An AI Based Video Compression Tool and Social Share",
    images: ["https://cloudinary.devsyn.tech/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
