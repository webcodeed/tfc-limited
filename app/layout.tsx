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
  title: "TFC Limited - Business Solutions & Consulting Services",
  description: "Professional business consulting, digital solutions, and project management services. TFC Limited delivers excellence through innovation and expertise.",
  keywords: "business consulting, digital solutions, project management, TFC Limited, professional services",
  authors: [{ name: "TFC Limited" }],
  openGraph: {
    title: "TFC Limited - Business Solutions & Consulting Services",
    description: "Professional business consulting, digital solutions, and project management services.",
    url: "https://tfclimited.com",
    siteName: "TFC Limited",
    images: [
      {
        url: "/img/TFC LOGO.png",
        width: 1200,
        height: 630,
        alt: "TFC Limited - Business Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TFC Limited - Business Solutions & Consulting Services",
    description: "Professional business consulting, digital solutions, and project management services.",
    images: ["/img/TFC LOGO.png"],
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