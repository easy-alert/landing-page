import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/MobileHeader";

const helveticaNeue = localFont({
  src: "./fonts/helveticaNeue/HelveticaNeueBold.otf",
  variable: "--font-helvetica-neue",
  weight: "700",
});

const helveticaNeueRegular = localFont({
  src: "./fonts/helveticaNeue/HelveticaNeueMedium.otf",
  variable: "--font-helvetica-neue-medium",
  weight: "500",
});

const gtWalsheimPro = localFont({
  src: "./fonts/gtWalsheimPro/GTWalsheimPro-Regular.ttf",
  variable: "--font-gt-walsheim-pro",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Easy Alert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${helveticaNeue.variable} ${helveticaNeueRegular.variable} ${gtWalsheimPro.className} flex flex-col m-auto max-w-fullWith`}
      >
        <Header />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
