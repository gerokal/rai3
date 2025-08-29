import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${roboto.variable} font-secondary bg-light-bg-gray text-text-main`}>
        <Header />
        <main className="pt-20 pb-24">
          {children}
        </main>
        <AudioPlayer />
        <Footer />
      </body>
    </html>
  );
}
