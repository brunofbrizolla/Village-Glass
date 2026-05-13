
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Quem Somos", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Galeria", href: "#galeria" },
  { name: "Localização", href: "#contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 sm:px-6 lg:px-8",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            V
          </div>
          <div className="flex flex-col">
            <span className={cn("font-headline font-bold text-lg leading-tight", !isScrolled && "text-white")}>
              Villageglass
            </span>
            <span className={cn("text-[10px] uppercase tracking-wider font-medium opacity-80", !isScrolled && "text-white")}>
              Vidraçaria Curitiba
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                !isScrolled ? "text-white/90" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="secondary" size="sm" className="rounded-full shadow-lg">
            <a
              href="https://wa.me/5541998379447?text=Olá,%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className={cn("md:hidden", !isScrolled ? "text-white" : "text-foreground")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="secondary" className="w-full">
            <a
              href="https://wa.me/5541998379447?text=Olá,%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
