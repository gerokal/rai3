import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import InstallPWAButton from "@/components/InstallPWAButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Radio Andrés Ibáñez - Stereo 97.9 FM",
  description: "La primera estación premium de Bolivia. Música de los 80s, 90s y 2000s.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Radio Andrés Ibáñez - Stereo 97.9 FM",
    description: "La primera estación premium de Bolivia. Música de los 80s, 90s y 2000s.",
    url: "https://stereo97.com/",
    siteName: "Stereo 97.9 FM",
    images: [
      {
        url: "/assets/logo_rai.png",
        width: 512,
        height: 512,
        alt: "Logo Stereo 97.9 FM",
      },
    ],
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@radioandresibanez",
    title: "Radio Andrés Ibáñez - Stereo 97.9 FM",
    description: "La primera estación premium de Bolivia. Música de los 80s, 90s y 2000s.",
    images: [
      "/assets/logo_rai.png"
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#ff6600" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/assets/logo_rai.png" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} font-secondary bg-light-bg-gray text-text-main transition-colors duration-300`}>
        <Header />
        <main className="pt-20 pb-24">
          {children}
        </main>
        <AudioPlayer />
        <Footer />
        <InstallPWAButton />
        {/* Service Worker registration */}
        <script dangerouslySetInnerHTML={{
          __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js'); }); }`,
        }} />
      </body>
    </html>
  );
}
