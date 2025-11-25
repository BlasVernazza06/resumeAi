import { ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <section className="pt-52 pb-20 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <div className="inline-block mb-6 px-4 py-2 rounded-full animate-bounce bg-secondary border border-border">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  La forma inteligente de resumir PDFs
                </p>
              </div>

              <h1 className="mb-6 leading-tight">
                Convierte PDFs en
                <span className="block mt-2 bg-gradient-to-br from-primary to-[#4F88FF] bg-clip-text text-transparent">
                  Resúmenes Brillantes
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transforma documentos complejos en resúmenes concisos y claros con inteligencia artificial.
                Ahorra tiempo, mantén la esencia.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
                <div className="card-custom">
                  <p className="text-2xl font-bold block mt-2 bg-gradient-to-br from-primary to-[#4F88FF] bg-clip-text text-transparent">50K+</p>
                  <p className="text-sm text-muted-foreground">PDFs Procesados</p>
                </div>
                <div className="card-custom">
                  <p className="text-2xl font-bold block mt-2 bg-gradient-to-br from-primary to-[#4F88FF] bg-clip-text text-transparent">99%</p>
                  <p className="text-sm text-muted-foreground">Precisión</p>
                </div>
                <div className="card-custom">
                  <p className="text-2xl font-bold block mt-2 bg-gradient-to-br from-primary to-[#4F88FF] bg-clip-text text-transparent">&lt;10s</p>
                  <p className="text-sm text-muted-foreground">Tiempo Promedio</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}