
"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contato" className="bg-background border-t pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">V</div>
            <span className="font-headline font-bold text-xl">Villageglass</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Sua vidraçaria de confiança em Curitiba. Qualidade, segurança e design em cada instalação.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-lg">Links Rápidos</h5>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
            <li><Link href="/#sobre" className="hover:text-primary transition-colors">Quem Somos</Link></li>
            <li><Link href="/#servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
            <li><Link href="/#contato" className="hover:text-primary transition-colors">Localização</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-lg">Contato</h5>
          <ul className="space-y-4 text-muted-foreground text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>R. Bernardo Krasinski, 84<br />Abranches, Curitiba - PR</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>(41) 3319-3400</span>
            </li>
            <li className="flex items-center gap-3 text-secondary font-bold">
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>(41) 99837-9447</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span className="truncate">karla_mascaro@yahoo.com.br</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-lg">Localização</h5>
          <div className="aspect-square bg-muted rounded-xl relative overflow-hidden">
             <Image 
               src="https://picsum.photos/seed/map/400/400" 
               alt="Mapa de localização Villageglass" 
               fill 
               className="object-cover"
               data-ai-hint="map location"
             />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer">
                <Button variant="secondary" size="sm" asChild>
                  <a href="https://maps.google.com" target="_blank">Ver no Google Maps</a>
                </Button>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© 2024 Village Glass – Todos os Direitos Reservados</p>
        <p>Desenvolvido com foco em SEO e Performance</p>
      </div>
    </footer>
  );
}
