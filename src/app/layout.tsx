import { Suspense } from "react";

import Script from "next/script";
import localFont from "next/font/local";
import dynamic from "next/dynamic";

import type { Metadata } from "next";

import { TrackingTagsProvider } from "@/components/TrackingTagsProvider";
import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/MobileHeader";

import "./globals.css";

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
  applicationName: process.env.npm_package_name,
  description: "Easy Alert - Plataforma de Gestão de Manutenção e Segurança",
  other: {
    appName: process.env.npm_package_name || "new-lp",
    appVersion: process.env.npm_package_version || "1.0.0",
    buildTime: new Date().toISOString(),
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Easy Alert",
    "Plataforma de Gestão de Manutenção e Segurança",
    "Gestão de Manutenção",
    "Segurança",
    "Tecnologia",
    "Inovação",
  ],
};

const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => mod.Footer),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* Google Tag Manager Script */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRS45NCB');
          `,
        }}
      />

      {/* Habbla Script */}
      <Script
        id="habbla"
        src="https://htm.hablla.io/api/tag-manager/loader/67a4c388c22cd08fa96c1230"
        strategy="afterInteractive"
      />

      <body
        className={`${helveticaNeue.variable} ${helveticaNeueRegular.variable} ${gtWalsheimPro.className} flex flex-col m-auto max-w-fullWith`}
      >
        <Suspense fallback={null}>
          <TrackingTagsProvider />
        </Suspense>

        <Header />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
