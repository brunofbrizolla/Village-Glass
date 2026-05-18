
"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contato" className="bg-background border-t pt-24 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/FAV-150x150.webp"
              alt="Village Glass logo"
              width={32}
              height={32}
              className="drop-shadow-sm rounded-md"
            />
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl tracking-tight leading-tight">Village Glass</span>
              <span className="text-[9px] uppercase tracking-wider font-medium opacity-70">Vidraçaria Curitiba</span>
            </div>
          </Link>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
            Sua vidraçaria de confiança em Curitiba. Qualidade, segurança e design em cada instalação de vidro.
          </p>

        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-widest text-primary">Links e Documentos</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
            <li><Link href="/#sobre" className="hover:text-primary transition-colors">Quem Somos</Link></li>
            <li><Link href="/termos-de-uso" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
            <li><Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-widest text-primary">Contato</h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-xs">R. Bernardo Krasinski, 84 - Ecoville, Curitiba - PR, 81200-406, Brasil</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs">(41) 99837-9447</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs truncate">contato@villageglass.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-widest text-muted-foreground">
        <p>© 2024 Village Glass – Todos os Direitos Reservados</p>
        <p>Excelência em Vidraçaria em Curitiba</p>
      </div>
    </footer>
  );
}
