
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Vidraçaria em Curitiba | Curitiba Villageglass Vidraçaria',
  description: 'Especialista em instalação de vidros em Curitiba. Box para banheiro, espelhos sob medida, fechamento de sacadas e manutenção de vidros. Solicite seu orçamento!',
  keywords: 'Vidraçaria em Curitiba, Instalação de Vidros, Sacadas de Vidro, Box para Banheiro, Espelhos Curitiba, Manutenção de Vidros',
  icons: {
    icon: '/FAV-150x150.webp',
    apple: '/FAV-150x150.webp',
  },
};

import { CookieConsent } from "@/components/CookieConsent";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <CookieConsent />
        <ExitIntentPopup />
        <Toaster />
      </body>
    </html>
  );
}
