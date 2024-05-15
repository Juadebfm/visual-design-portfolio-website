import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juadebgabriel.com/"),
  title: "Juadeb Gabriel",
  description:
    "Hobby Designer and Software Engineer, currently at PluralCode Academy. Focused on immersive experiences, engaging new techies and ensuring business processes are enhanced.",
  generator: "Next.js",
  applicationName: "Juadeb Gabriel",
  keywords: [
    "Juadeb Gabriel",
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
    "tailwindcss",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Juadeb Gabriel - Designer and Developer",
    description:
      "Hobby Designer and Software Engineer, currently at Neumann Kaffee Gruppe. Focused on immersive experiences, studying in Hamburg, Germany.",
    url: "https://www.juadebgabriel.com/",
    siteName: "www.juadebgabriel.com",
    images: [
      {
        url: "./public/metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Juadeb Gabriel - Designer and Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juadeb Gabriel - Designer and Developer",
    description:
      "Hobby Designer and Software Engineer, currently at PluralCode Academy. Focused on immersive experiences, engaging new techies and ensuring business processes are enhanced.",
    creator: "juadeb",
    creatorId: "0000000000",
    images: ["./public/Metadata.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
