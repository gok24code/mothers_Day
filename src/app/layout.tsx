import type { Metadata } from "next";
import { Inter, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: '--font-dancing-script',
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: "Canım Anneme - Anneler Günün Kutlu Olsun",
  description: "Anneler günü için özel hazırlanmış bir mektup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} ${dancingScript.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
