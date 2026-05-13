
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShieldCheck, Clock, MapPin, Star, ChevronRight, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { SmartConsultant } from "@/components/SmartConsultant";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";

const services = [
  {
    slug: "box-para-banheiro",
    title: "Box para Banheiro",
    desc: "Instalações sob medida em vidro temperado 8mm ou 10mm. Segurança e elegância para sua suíte.",
    img: getPlaceholderImage("bathroom-box"),
  },
  {
    slug: "espelhos-decorativos",
    title: "Espelhos Decorativos",
    desc: "Espelhos lapidados e bisotê para salas, banheiros e closets. Fabricação sob medida para ampliar ambientes.",
    img: getPlaceholderImage("mirrors"),
  },
  {
    slug: "portas-de-vidro",
    title: "Portas de Vidro",
    desc: "Portas deslizantes ou de abrir com ferragens de alto padrão. Perfeito para divisórias e entradas.",
    img: getPlaceholderImage("glass-door"),
  },
  {
    slug: "sacadas-e-envidracamento",
    title: "Sacadas e Envidraçamento",
    desc: "Sistemas de envidraçamento de sacadas com redução de ruído e proteção contra intempéries.",
    img: getPlaceholderImage("balcony"),
  },
  {
    slug: "manutencao-especializada",
    title: "Manutenção Especializada",
    desc: "Conserto de portas de vidro, troca de roldanas, molas de piso e ajustes preventivos.",
    img: getPlaceholderImage("maintenance"),
  }
];

const testimonials = [
  { name: "Carlos Silva", text: "Atendimento excelente e instalação super rápida do meu box. Recomendo muito!" },
  { name: "Mariana Costa", text: "Os espelhos ficaram maravilhosos. O acabamento bisotê deu outra vida pra minha sala." },
  { name: "João Pereira", text: "Preço justo e pontualidade. Manutenção da porta de vidro da loja ficou perfeita." }
];

export default function Home() {
  const heroImg = getPlaceholderImage("hero-glass");

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg.imageUrl}
          alt={heroImg.description}
          fill
          priority
          className="object-cover brightness-[0.3]"
          data-ai-hint={heroImg.imageHint}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-700">
            Excelência em <span className="text-secondary">Vidraçaria</span> em Curitiba
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Soluções personalizadas em vidros temperados, laminados, espelhos e manutenção especializada com garantia de qualidade Villageglass.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 font-bold text-lg h-14 w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform">
              <a href="https://wa.me/5541998379447?text=Olá,%20gostaria%20de%20um%20orçamento.">
                Solicitar Orçamento Grátis
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-10 font-bold text-lg h-14 w-full sm:w-auto text-white border-white/30 hover:bg-white/10">
              <Link href="#servicos">Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="sobre" className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Qualidade Curitibana
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground leading-tight">
              Bem-vindo à Curitiba Villageglass
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
               src="https://picsum.photos/seed/shop/800/600" 
               alt="Equipe Villageglass em Curitiba" 
               fill 
               className="object-cover"
               data-ai-hint="glass workshop"
             />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-24 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Nossos Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Oferecemos o que há de mais moderno em tecnologia de vidros para transformar seu ambiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.img.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={service.img.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4 bg-card">
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-bold hover:text-secondary gap-2">
                    <Link href={`/servicos/${service.slug}`}>
                      Saiba Mais <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart AI Section */}
      <SmartConsultant />

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Segurança Total</h4>
            <p className="text-primary-foreground/70 text-sm">Vidros temperados e laminados certificados pelas normas ABNT.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Prazo Garantido</h4>
            <p className="text-primary-foreground/70 text-sm">Respeitamos seu tempo com cronogramas de instalação rigorosos.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <PenTool className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Mão de Obra</h4>
            <p className="text-primary-foreground/70 text-sm">Profissionais treinados e especializados em acabamentos finos.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Atendimento Local</h4>
            <p className="text-primary-foreground/70 text-sm">Base em Curitiba para suporte rápido em toda a região metropolitana.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4">O que dizem nossos clientes</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-secondary text-secondary" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-muted/30 p-8 rounded-2xl border relative">
                <p className="italic text-muted-foreground mb-6">"{t.text}"</p>
                <div className="font-bold text-primary">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium mt-1">Cliente Verificado</div>
              </div>
            ))}
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
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
