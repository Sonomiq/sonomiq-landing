import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SONOMIQ — Ergonomic Scheduling Add-on for Ultrasound",
  description: "SONOMIQ plugs into your scheduler to reduce sonographer injury risk with risk scoring, micro-breaks, smart rotations, and exposure caps. Marketplaces coming soon: ADP, UKG, Workday, Dayforce, Deputy, When I Work, QGenda.",
  keywords: ["sonographer", "ultrasound", "scheduling", "ergonomics", "workplace safety", "WRMSD", "healthcare scheduling", "injury prevention"],
  authors: [{ name: "SONOMIQ" }],
  creator: "SONOMIQ",
  publisher: "SONOMIQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sonomiq.example"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SONOMIQ — Ergonomic Scheduling Add-on for Ultrasound",
    description: "SONOMIQ plugs into your scheduler to reduce sonographer injury risk with risk scoring, micro-breaks, smart rotations, and exposure caps.",
    url: "https://sonomiq.example",
    siteName: "SONOMIQ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SONOMIQ - Ergonomic Scheduling for Ultrasound",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SONOMIQ — Ergonomic Scheduling Add-on for Ultrasound",
    description: "SONOMIQ plugs into your scheduler to reduce sonographer injury risk with risk scoring, micro-breaks, smart rotations, and exposure caps.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SONOMIQ",
              "description": "Ergonomic scheduling add-on for ultrasound departments to reduce sonographer injury risk",
              "operatingSystem": "Web",
              "applicationCategory": "HealthcareApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder"
              },
              "provider": {
                "@type": "Organization",
                "name": "SONOMIQ"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
