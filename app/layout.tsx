import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://tlclimited.com'),
  title: "TLC Limited - Telecommunications & Digital Infrastructure Solutions",
  description: "Advanced telecommunications solutions including two-way radio communication, PABX systems, LAN installation, security systems, and tower services. Connecting excellence through innovation.",
  keywords: "telecommunications Nigeria, two-way radio communication, PABX systems, intercom installation, LAN installation, security systems, CCTV installation, tower services, antenna installation, lightning protection, digital infrastructure",
  authors: [{ name: "TLC Limited" }],
  openGraph: {
    title: "TLC Limited - Telecommunications & Digital Infrastructure Solutions",
    description: "Advanced telecommunications solutions including two-way radio communication, PABX systems, security systems, and tower services. Connecting excellence through innovation.",
    url: "https://tlclimited.com",
    siteName: "TLC Limited",
    images: [
      {
        url: "/img/TLC LOGO.png",
        width: 1200,
        height: 630,
        alt: "TLC Limited - Telecommunications Solutions",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TLC Limited - Telecommunications & Digital Infrastructure Solutions",
    description: "Advanced telecommunications solutions including two-way radio communication, PABX systems, security systems, and tower services.",
    images: ["/img/TLC LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}