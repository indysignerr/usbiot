import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "US Biot Football — Club familial sur la Cote d'Azur",
    template: "%s | US Biot Football",
  },
  description:
    "Club de football familial a Biot (06). Ecole de foot, equipes U7 a Seniors, stages, inscriptions. Rejoignez l'aventure US Biot !",
  keywords: [
    "US Biot",
    "football",
    "club",
    "Biot",
    "Cote d'Azur",
    "ecole de foot",
    "inscription",
    "stage football",
  ],
  openGraph: {
    title: "US Biot Football",
    description: "Club de football familial a Biot sur la Cote d'Azur",
    url: "https://usbiot.fr",
    siteName: "US Biot Football",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background p-8 text-center">
            <p className="text-lg">Ce site nécessite JavaScript pour fonctionner correctement.</p>
          </div>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-usbiot-red focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold">
            Aller au contenu
          </a>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
