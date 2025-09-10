import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bubble Barrel Commerce Nigeria Ltd",
  description: "Bubble Barrel Commerce Nigeria Ltd - Your trusted partner for innovative digital solutions and business growth in Nigeria and beyond.",
  keywords: ["Nigeria business", "digital solutions", "e-commerce", "business growth", "Nigerian market"],
  authors: [{ name: 'Bubble Barrel Commerce Nigeria Ltd' }],
  creator: 'Bubble Barrel Team',
  publisher: 'Bubble Barrel Commerce Nigeria Ltd',
  metadataBase: new URL('https://bbcnl.com'),
  openGraph: {
    title: 'Bubble Barrel Commerce Nigeria Ltd',
    description: 'Your trusted partner for innovative digital solutions and business growth in Nigeria and beyond.',
    url: 'https://bbcnl.com',
    siteName: 'Bubble Barrel',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bubble Barrel Commerce Nigeria Ltd',
    description: 'Innovative digital solutions for business growth in Nigeria',
    creator: '@BubbleBarrelNG'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
