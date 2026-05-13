
"use client";

import { useState } from "react";
import { Sparkles, Loader2, CheckCircle2, ShieldCheck, Ruler } from "lucide-react";
import { consultGlass, type GlassConsultationOutput } from "@/ai/flows/ai-glass-consultant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SmartConsultant() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GlassConsultationOutput | null>(null);
  const [form, setForm] = useState({
    projectDescription: "",
    dimensions: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await consultGlass(form);
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 gap-1 border-primary text-primary">
            <Sparkles className="w-3 h-3" /> Inteligência Artificial
          </Badge>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Consultor Inteligente de Vidros</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não sabe qual vidro escolher? Nossa IA analisa seu projeto e recomenda o tipo e a espessura ideal seguindo normas de segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="border-primary/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-xl">Detalhes do Projeto</CardTitle>
              <CardDescription className="text-primary-foreground/80">Descreva o que você precisa</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">O que você pretende fazer?</label>
                  <Textarea
                    placeholder="Ex: Box de banheiro para suite, fechamento de sacada em andar alto..."
                    value={form.projectDescription}
                    onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Dimensões aproximadas</label>
                  <Input
                    placeholder="Ex: 1.2m x 2.10m ou L: 80cm, A: 190cm"
                    value={form.dimensions}
                    onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Analisando Projeto...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" /> Obter Recomendação
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-xl bg-card">
                <ShieldCheck className="w-12 h-12 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Preencha os dados ao lado para ver a recomendação técnica.</p>
              </div>
            )}

            {loading && (
              <div className="space-y-4 animate-pulse">
                <div className="h-32 bg-muted rounded-xl" />
                <div className="h-48 bg-muted rounded-xl" />
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <Card className="border-secondary shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Tipo Recomendado</p>
                        <h3 className="text-2xl font-bold text-secondary capitalize">{result.recommendedGlassType}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                        <Ruler className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Espessura Técnica</p>
                        <h3 className="text-2xl font-bold text-secondary">{result.recommendedThickness}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="p-6 bg-card border rounded-xl shadow-sm">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" /> Justificativa Técnica
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {result.reasoning}
                  </p>
                </div>

                <Button asChild variant="secondary" className="w-full font-bold">
                  <a href="https://wa.me/5541998379447?text=Olá,%20acabei%20de%20usar%20seu%20consultor%20IA.%20Quero%20um%20orçamento%20para%20meu%20projeto." target="_blank">
                    Conversar com Especialista Humano
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
