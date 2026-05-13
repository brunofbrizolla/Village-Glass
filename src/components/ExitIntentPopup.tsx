
"use client";

import { useState, useEffect } from "react";
import { X, Gift, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    // Check if user already saw the popup in this session
    const shown = sessionStorage.getItem("exit_popup_shown");
    if (shown) setHasShown(true);

    const handleMouseOut = (e: MouseEvent) => {
      if (hasShown) return;

      // Detect if mouse moves above the top of the window
      if (e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exit_popup_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseOut);
    return () => document.removeEventListener("mouseleave", handleMouseOut);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a server/webhook
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Auto close after 3 seconds on success
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-muted/20 hover:bg-muted/40 transition-colors z-10"
        >
          <X className="w-5 h-5 text-foreground/60" />
        </button>

        {!isSubmitted ? (
          <div className="flex flex-col">
            <div className="bg-primary p-6 text-white text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-1">
                <Gift className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-headline font-bold leading-tight">Espere! Não vá embora...</h2>
              <p className="text-primary-foreground/90 text-sm">
                Ganhe <span className="font-bold text-white">10% de DESCONTO</span> agora!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">O que você procura?</label>
                <select 
                  required 
                  defaultValue=""
                  className="w-full h-11 rounded-xl border border-muted bg-muted/5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="" disabled>Escolha um serviço</option>
                  <option value="box">Box para Banheiro</option>
                  <option value="espelhos">Espelhos Sob Medida</option>
                  <option value="portas">Portas de Vidro</option>
                  <option value="sacadas">Fechamento de Sacadas</option>
                  <option value="guarda-corpo">Guarda-Corpo</option>
                  <option value="manutencao">Manutenção</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Seu E-mail</label>
                <Input 
                  type="email" 
                  required 
                  placeholder="exemplo@email.com"
                  className="h-11 rounded-xl border-muted bg-muted/5 text-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">WhatsApp / Telefone</label>
                <Input 
                  type="tel" 
                  required 
                  placeholder="(41) 99999-9999"
                  className="h-11 rounded-xl border-muted bg-muted/5 text-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <Button type="submit" className="w-full h-12 rounded-full text-base font-bold shadow-lg hover:scale-105 transition-transform bg-primary text-white">
                Garantir Meu Desconto <Send className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-[9px] text-center text-muted-foreground">
                Ao clicar, você concorda em receber nosso contato comercial.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-16 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-headline font-bold text-foreground">Cupom Garantido!</h3>
              <p className="text-muted-foreground text-lg">
                Em breve nossa equipe entrará em contato com seu orçamento e o desconto aplicado.
              </p>
            </div>
            <Button onClick={() => setIsVisible(false)} variant="outline" className="rounded-full">
              Fechar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
