import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geist = Geist({ subsets: ["latin"], display: "swap" });
const metadataBase = siteConfig.canonicalUrl ? new URL(siteConfig.canonicalUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: siteConfig.canonicalUrl ? { canonical: siteConfig.canonicalUrl } : undefined,
  openGraph: {
    type: "website",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.canonicalUrl || undefined,
    images: [{ url: siteConfig.brand.adaptiveIcon, alt: "Lalaba" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.brand.adaptiveIcon],
  },
  icons: {
    icon: siteConfig.brand.favicon,
    apple: siteConfig.brand.adaptiveIcon,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
