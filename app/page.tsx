import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import HowWorksSection from "@/components/process-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Gradientes de fondo */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Gradiente superior derecho - Azul tech */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Gradiente inferior izquierdo - Morado/Azul */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Gradiente central sutil */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Contenido con z-index mayor */}
      <div>
        <Header/>
      </div>

      <main className="relative z-10 pb-30">
        <HeroSection/>
        <HowWorksSection/>
        <Pricing/>
      </main>

      <Footer/>
    </div>
  );
}