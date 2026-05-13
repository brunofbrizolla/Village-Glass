
import type {Metadata} from 'next';
import './globals.css';
import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vidraçaria em Curitiba | Curitiba Villageglass Vidraçaria',
  description: 'Especialista em instalação de vidros em Curitiba. Box para banheiro, espelhos sob medida, fechamento de sacadas e manutenção de vidros. Solicite seu orçamento!',
  keywords: 'Vidraçaria em Curitiba, Instalação de Vidros, Sacadas de Vidro, Box para Banheiro, Espelhos Curitiba, Manutenção de Vidros',
  icons: {
    apple: '/FAV-150x150.webp',
  },
  alternates: {
    canonical: 'https://www.vidracariavilageglass.com.br',
  },
};

import { ClientSideComponents } from "@/components/ClientSideComponents";
import { MotionProvider } from "@/components/MotionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">

      <body className={`${poppins.variable} ${inter.variable} font-body antialiased bg-background text-foreground`}>
        <MotionProvider>
          <main id="main-content">
            {children}
          </main>
          <ClientSideComponents />
        </MotionProvider>
      </body>
    </html>
  );
}
