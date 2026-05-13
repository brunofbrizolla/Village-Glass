
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-6 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full" />
        
        <div className="flex items-start gap-4 relative z-10">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <Cookie className="w-6 h-6" />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg text-foreground">Nós valorizamos sua privacidade</h4>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar o conteúdo. Ao continuar navegando, você concorda com nossa <a href="/politica-de-privacidade" className="text-primary hover:underline font-medium">Política de Privacidade</a>.
            </p>
            
            <div className="flex gap-3 pt-2">
              <Button onClick={acceptCookies} className="rounded-full px-6 font-bold flex-1 bg-primary text-white hover:bg-primary/90">
                Aceitar Tudo
              </Button>
              <Button variant="outline" onClick={() => setIsVisible(false)} className="rounded-full px-6 font-bold flex-1 border-gray-200">
                Recusar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
