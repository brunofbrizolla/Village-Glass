"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const galleryImages = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  src: `/galeria/galeria-${i + 1}.avif`,
  alt: `Trabalho de Vidraçaria Village Glass Curitiba - Galeria ${i + 1}`,
}));

export function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Autoplay function
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4500); // Scroll every 4.5s

    return () => clearInterval(interval);
  }, [api]);

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1));
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
            Portfólio Real
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
            Galeria de <span className="text-primary">Projetos Concluídos</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed pt-2">
            Explore fotos reais de nossos trabalhos recentes em Curitiba e Região Metropolitana. Transparência, precisão e acabamento impecável em cada detalhe.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative px-4 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {galleryImages.map((img, idx) => (
                <CarouselItem
                  key={img.id}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative h-[360px] w-full rounded-[2rem] overflow-hidden shadow-md border border-gray-100 cursor-pointer bg-slate-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center">
                      <div className="bg-white/90 text-primary p-4 rounded-full shadow-lg scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Premium Control Buttons */}
            <CarouselPrevious className="hidden md:flex -left-6 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all w-12 h-12 rounded-full shadow-lg" />
            <CarouselNext className="hidden md:flex -right-6 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all w-12 h-12 rounded-full shadow-lg" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            <span className="text-xs font-bold text-muted-foreground/60 tracking-wider">
              Arraste para o lado para ver mais fotos ({current} de {galleryImages.length})
            </span>
          </div>
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col justify-between p-4 md:p-8 backdrop-blur-md"
          >
            {/* Top Navigation */}
            <div className="flex items-center justify-between text-white/90 max-w-7xl w-full mx-auto pt-2">
              <span className="font-bold tracking-widest text-xs uppercase bg-white/10 px-4 py-2 rounded-full">
                Foto {lightboxIndex + 1} de {galleryImages.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors shadow-lg"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Interactive Slider */}
            <div className="relative flex-grow flex items-center justify-center max-w-5xl w-full mx-auto my-4 md:my-8">
              {/* Prev Button */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 md:left-4 z-10 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all backdrop-blur-md border border-white/5 active:scale-95 shadow-2xl"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Central Premium Container */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full h-[65vh] md:h-[75vh] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-black"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
              >
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain p-2"
                  priority
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-2 md:right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all backdrop-blur-md border border-white/5 active:scale-95 shadow-2xl"
                aria-label="Próximo"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center text-white/60 text-sm max-w-lg mx-auto pb-4">
              <p className="font-medium tracking-wide">
                Nossos produtos utilizam vidros temperados normatizados e ferragens de alto padrão para total segurança.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
