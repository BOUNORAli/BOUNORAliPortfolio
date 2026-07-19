import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alibounor.com"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Ali Bounor",
    "Consultant fonctionnel ERP",
    "Business Analyst",
    "Analyste fonctionnel SI",
    "Transformation digitale",
    "Product Owner",
    "Chef de projet IT",
    "OMOTAL",
    "ALOM Solutions",
    "BF4 Invest",
    "Edura",
  ],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.alibounor.com",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${newsreader.variable} h-full antialiased`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <style>{`:root { --font-satoshi: "Satoshi", ui-sans-serif, system-ui, sans-serif; }`}</style>
      </head>
      <body className="min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
