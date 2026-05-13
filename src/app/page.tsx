import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShieldCheck, Clock, MapPin, Star, ChevronRight, PenTool, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

import { Footer } from "@/components/Footer";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { AnimatedSection } from "@/components/AnimatedSection";


const services = [
  {
    slug: "box-para-banheiros",
    title: "Box para Banheiros",
    desc: "Instalações sob medida que combinam estilo e praticidade. Nossos boxes de vidro temperado garantem resistência e um design moderno para valorizar seu banheiro.",
    img: { imageUrl: "/box-banheiro.webp" },
  },
  {
    slug: "espelhos-sob-medida",
    title: "Espelhos Sob Medida",
    desc: "Amplie e valorize seus espaços com espelhos personalizados. Oferecemos soluções feitas sob medida para trazer elegância e funcionalidade a qualquer ambiente, residencial ou comercial.",
    img: { imageUrl: "/espelhos.webp" },
  },
  {
    slug: "portas-deslizantes",
    title: "Portas Deslizantes",
    desc: "Aproveite melhor seus espaços com portas deslizantes de vidro. Ideais para ambientes contemporâneos, nossas soluções combinam praticidade e design elegante.",
    img: { imageUrl: "/portas-vidro.webp" },
  },
  {
    slug: "sacadas-de-vidro-temperado",
    title: "Sacadas de Vidro Temperado",
    desc: "Transforme sua sacada em um espaço mais seguro e aconchegante. Nossos fechamentos de vidro oferecem isolamento, proteção e um visual moderno para sua residência ou comércio.",
    img: { imageUrl: "/sacadas.webp" },
  },
  {
    slug: "guarda-corpo-de-vidro",
    title: "Guarda-Corpo de Vidro",
    desc: "Proporcionamos proteção e sofisticação com guarda-corpos de vidro sob medida. Soluções ideais para escadas, varandas e sacadas, unindo resistência e design moderno.",
    img: { imageUrl: "/guarda-corpo.webp" },
  },
  {
    slug: "manutencao",
    title: "Manutenção",
    desc: "Preserve a beleza e segurança dos seus vidros com nossos serviços de manutenção. Realizamos ajustes, reparos e trocas para garantir a durabilidade e o perfeito funcionamento das suas instalações.",
    img: { imageUrl: "/manutencao.webp" },
  },
];

const testimonials = [
  { name: "Carlos Silva", text: "Atendimento excelente e instalação super rápida do meu box. Recomendo muito!", date: "há uma semana" },
  { name: "Mariana Costa", text: "Os espelhos ficaram maravilhosos. O acabamento bisotê deu outra vida pra minha sala.", date: "há 2 meses" },
  { name: "João Pereira", text: "Preço justo e pontualidade. Manutenção da porta de vidro da loja ficou perfeita.", date: "há 3 semanas" }
];

import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  const heroImg = { imageUrl: "/hero.webp" };
  
  // Preload the LCP image
  ReactDOM.preload(heroImg.imageUrl, { as: "image", fetchPriority: "high" });

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg.imageUrl}
          alt="Fachada moderna da Village Glass com vidros espelhados"
          fetchpriority="high"
          loading="eager"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-700">
            Excelência em <span className="text-secondary">Vidraçaria</span> em Curitiba
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Soluções personalizadas em vidros temperados, laminados, espelhos e manutenção especializada com garantia de qualidade Village Glass.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 font-bold text-lg h-14 w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform">
              <a href="https://wa.me/5541998379447?text=Olá,%20gostaria%20de%20um%20orçamento.">
                Solicitar Orçamento Grátis
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="relative py-24 px-4 bg-white">
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground leading-tight">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
              Soluções em vidro com tecnologia de ponta para transformar e valorizar qualquer ambiente.
            </p>
          </div>

          {/* Service rows */}
          <div className="flex flex-col gap-20">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`group flex flex-col gap-12 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Circular image */}
                  <div className="flex-shrink-0 relative">
                    <AnimatedSection direction={isEven ? "left" : "right"}>
                      <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full p-1.5 border-2 border-primary/20 shadow-xl overflow-hidden bg-white">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image
                            src={service.img.imageUrl}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 320px, 400px"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
                    <AnimatedSection direction={isEven ? "right" : "left"}>
                      <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="h-1 w-16 bg-primary rounded-full mx-auto md:mx-0" />

                      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-2">
                        <a
                          href={`https://wa.me/5541998379447?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20${encodeURIComponent(service.title)}.`}
                          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-base hover:bg-primary/90 transition-colors shadow-lg"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Pedir Orçamento
                        </a>
                        <Link 
                          href={`/servicos/${service.slug}`}
                          className="inline-flex items-center gap-2 text-primary font-bold hover:underline py-2 px-4"
                        >
                          Saiba Mais <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="sobre" className="py-24 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">

            <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground leading-tight">
              Bem-vindo à Curitiba Village Glass
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desde nossa fundação, o compromisso tem sido oferecer serviços de vidraçaria com alto padrão de qualidade e atendimento diferenciado. Atendemos residências e comércios com agilidade e precisão técnica.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-tight">Anos de Experiência</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-tight">Projetos Entregues</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
             <Image 
               src="/workshop.webp" 
               alt="Equipe Village Glass em Curitiba" 
               fill 
               className="object-cover"
               data-ai-hint="glass workshop"
             />
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Segurança Total</h3>
            <p className="text-primary-foreground/70 text-sm">Vidros temperados e laminados certificados pelas normas ABNT.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Prazo Garantido</h3>
            <p className="text-primary-foreground/70 text-sm">Respeitamos seu tempo com cronogramas de instalação rigorosos.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <PenTool className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Mão de Obra</h3>
            <p className="text-primary-foreground/70 text-sm">Profissionais treinados e especializados em acabamentos finos.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Atendimento Local</h3>
            <p className="text-primary-foreground/70 text-sm">Base em Curitiba para suporte rápido em toda a região metropolitana.</p>
          </div>
        </div>
      </section>

      {/* Testimonials - Google Business Style */}
      <section className="py-24 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-2">O que dizem nossos clientes</h2>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-bold text-xl">4.9</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />)}
                </div>
                <span className="text-muted-foreground text-sm">(124 avaliações no Google)</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-none">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.date}</div>
                  </div>
                  <div className="ml-auto">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285f4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34a853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#fbbc05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ea4335"/>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />)}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1a73e8] hover:underline"
            >
              Ver todas as avaliações no Google <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      {/* Location Section */}
      <section id="localizacao" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Map Container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3] md:aspect-video lg:aspect-square">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28825.124927484525!2d-49.342948!3d-25.433562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce18af9686887%3A0xf8a019777a2e5120!2sVidra%C3%A7aria%20Village%20Glass!5e0!3m2!1spt-BR!2sus!4v1778698610236!5m2!1spt-BR!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                  title="Localização da Vidraçaria Village Glass no Google Maps"
                ></iframe>
              </div>
            </div>

            {/* Content Container */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Localização</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Onde Estamos</h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Venha nos visitar ou solicite uma visita técnica. Atendemos com agilidade em toda a região de Curitiba.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">R. Professor João Falarz, 1421 - Campo Comprido, Curitiba - PR</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(41) 99837-9447</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">E-mail</h3>
                    <p className="text-muted-foreground">contato@villageglass.com.br</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="rounded-full px-10 h-14 font-bold text-lg shadow-xl hover:scale-105 transition-transform bg-primary text-white hover:bg-primary/90">
                  <a href="https://wa.me/5541998379447?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20técnica.">
                    Falar com Especialista
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/5541998379447?text=Olá,%20gostaria%20de%20um%20orçamento%20rápido."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
