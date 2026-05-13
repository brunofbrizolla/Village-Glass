
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, CheckCircle2, MessageCircle, ShieldCheck, Ruler, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getPlaceholderImage } from "@/lib/placeholder-images";

interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  technicalSpecs: { label: string; value: string }[];
  image: { imageUrl: string; description: string; imageHint: string };
}

const servicesData: Record<string, ServiceDetail> = {
  "box-para-banheiro": {
    slug: "box-para-banheiro",
    title: "Box para Banheiro",
    subtitle: "Segurança e Modernidade para seu Banheiro",
    description: "Instalação de box em vidro temperado com alta resistência e acabamento impecável.",
    longDescription: "O box para banheiro da Villageglass é sinônimo de segurança e sofisticação. Trabalhamos exclusivamente com vidros temperados de 8mm e 10mm, seguindo rigorosamente as normas da ABNT. Oferecemos diversas opções de kits de acabamento (alumínio, inox, roldanas aparentes) para combinar perfeitamente com o design do seu banheiro.",
    features: [
      "Vidro temperado de alta segurança",
      "Várias opções de cores (Incolor, Verde, Fumê, Jateado)",
      "Kits de instalação em alumínio ou inox",
      "Instalação rápida e limpa",
      "Garantia contra defeitos de fabricação"
    ],
    technicalSpecs: [
      { label: "Espessura", value: "8mm ou 10mm" },
      { label: "Material", value: "Vidro Temperado" },
      { label: "Norma", value: "ABNT NBR 14207" }
    ],
    image: getPlaceholderImage("bathroom-box")
  },
  "espelhos-decorativos": {
    slug: "espelhos-decorativos",
    title: "Espelhos Decorativos",
    subtitle: "Ampliando e Valorizando Ambientes",
    description: "Espelhos sob medida com acabamento bisotê, lapidado ou molduras personalizadas.",
    longDescription: "Espelhos são ferramentas poderosas na decoração, capazes de ampliar visualmente espaços pequenos e aumentar a luminosidade. Na Villageglass, fabricamos espelhos com tecnologia de proteção contra oxidação (manchas pretas), garantindo durabilidade. Atendemos projetos para salas, quartos, banheiros e academias.",
    features: [
      "Espelhos de cristal de primeira linha",
      "Acabamento bisotê ou lapidado",
      "Instalação com fixação segura",
      "Proteção contra oxidação",
      "Corte preciso sob medida"
    ],
    technicalSpecs: [
      { label: "Espessura", value: "4mm, 5mm ou 6mm" },
      { label: "Acabamento", value: "Bisotê / Lapidado" },
      { label: "Origem", value: "Cristal Nacional" }
    ],
    image: getPlaceholderImage("mirrors")
  },
  "portas-de-vidro": {
    slug: "portas-de-vidro",
    title: "Portas de Vidro",
    subtitle: "Divisórias Elegantes e Funcionais",
    description: "Portas de abrir ou correr com ferragens de alto padrão para residências e escritórios.",
    longDescription: "Nossas portas de vidro proporcionam uma transição suave entre ambientes, mantendo a luminosidade e o isolamento acústico. São ideais para frentes de lojas, divisórias de escritórios e acessos residenciais. Utilizamos ferragens robustas que garantem um deslizamento silencioso e duradouro.",
    features: [
      "Sistemas de correr com trilhos embutidos",
      "Portas de abrir com mola de piso",
      "Fechaduras de segurança",
      "Vidro temperado ou laminado",
      "Acabamentos em diversas cores"
    ],
    technicalSpecs: [
      { label: "Vidro", value: "Temperado 10mm" },
      { label: "Ferragens", value: "Inox ou Alumínio" },
      { label: "Segurança", value: "Alta Resistência" }
    ],
    image: getPlaceholderImage("glass-door")
  },
  "sacadas-e-envidracamento": {
    slug: "sacadas-e-envidracamento",
    title: "Sacadas e Envidraçamento",
    subtitle: "Conforto Térmico e Acústico",
    description: "Fechamento de sacadas com sistema retrátil para aproveitar seu espaço em qualquer clima.",
    longDescription: "O fechamento de sacada transforma sua área externa em um ambiente útil o ano todo. Nosso sistema permite a abertura total dos vidros, proporcionando ventilação quando desejado e proteção total contra vento, chuva e ruído urbano quando fechado. Valorize seu imóvel com esta solução moderna.",
    features: [
      "Sistema de abertura total (retrátil)",
      "Vedação contra água e vento",
      "Redução de ruído externo",
      "Trava de segurança para crianças",
      "Fácil limpeza interna e externa"
    ],
    technicalSpecs: [
      { label: "Sistema", value: "Europeu / Retrátil" },
      { label: "Vidro", value: "Laminado / Temperado" },
      { label: "Vedação", value: "Escovas e Silicone" }
    ],
    image: getPlaceholderImage("balcony")
  },
  "manutencao-especializada": {
    slug: "manutencao-especializada",
    title: "Manutenção Especializada",
    subtitle: "Sua Segurança em Primeiro Lugar",
    description: "Revisão técnica, troca de roldanas, molas e regulagem de portas de vidro.",
    longDescription: "Vidros e ferragens precisam de manutenção preventiva para evitar acidentes e garantir o funcionamento suave. Realizamos a troca de molas de piso oxidadas, substituição de roldanas de box que estão travando e regulagem geral de portas que estão 'pegando' no chão. Atendimento rápido em toda Curitiba.",
    features: [
      "Troca de mola de piso",
      "Substituição de roldanas de box",
      "Regulagem de fechaduras",
      "Troca de vedações ressecadas",
      "Vistoria técnica de segurança"
    ],
    technicalSpecs: [
      { label: "Atendimento", value: "Residencial / Comercial" },
      { label: "Prazo", value: "Urgências em 24h" },
      { label: "Peças", value: "Originais de Fábrica" }
    ],
    image: getPlaceholderImage("maintenance")
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        {/* Header Section */}
        <section className="px-4 mb-12">
          <div className="max-w-5xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 hover:bg-transparent p-0">
              <Link href="/#servicos" className="flex items-center gap-2 text-primary font-bold">
                <ChevronLeft className="w-4 h-4" /> Voltar para Serviços
              </Link>
            </Button>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-primary font-medium">{service.subtitle}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {service.technicalSpecs.map((spec, i) => (
                    <div key={i} className="bg-muted px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tight">
                      <span className="text-primary mr-2">{spec.label}:</span>
                      <span className="text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image.imageUrl}
                  alt={service.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={service.image.imageHint}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-headline font-bold mb-10 text-center">O que está incluso</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 bg-primary rounded-3xl p-12 text-primary-foreground shadow-2xl">
            <ShieldCheck className="w-16 h-16 mx-auto opacity-50" />
            <h3 className="text-3xl font-headline font-bold">Pronto para transformar seu ambiente?</h3>
            <p className="text-primary-foreground/80 text-lg">
              Nossa equipe está pronta para realizar sua medição técnica e entregar o melhor acabamento de Curitiba.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-10 font-bold h-14">
                <a href={`https://wa.me/5541998379447?text=Gostaria%20de%20um%20orçamento%20para%20${service.title}`}>
                  <MessageCircle className="w-5 h-5 mr-2" /> Solicitar Orçamento Grátis
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
