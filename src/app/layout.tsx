import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { UXProvider } from "@/lib/context";

// Configuration des polices optimisées pour l'accessibilité
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio UX-Centré - Développeur Full Stack",
  description: "Portfolio centré sur l'expérience utilisateur, démontrant une approche human-first dans le développement web et mobile.",
  keywords: ["développeur", "UX", "React", "TypeScript", "portfolio", "expérience utilisateur"],
  authors: [{ name: "Votre Nom" }],
  creator: "Votre Nom",
  openGraph: {
    title: "Portfolio UX-Centré - Développeur Full Stack",
    description: "Portfolio centré sur l'expérience utilisateur, démontrant une approche human-first dans le développement web et mobile.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio UX-Centré - Développeur Full Stack",
    description: "Portfolio centré sur l'expérience utilisateur, démontrant une approche human-first dans le développement web et mobile.",
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Préchargement des ressources critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta tags pour l'accessibilité */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#F97316" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Manifest pour PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon optimisé */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <UXProvider>
          {children}
        </UXProvider>
      </body>
    </html>
  );
}
