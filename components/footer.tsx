import { Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-surface-1 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg ai-gradient flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold bg-gradient-to-br from-primary to-[#4F88FF] bg-clip-text text-transparent">resumeAI</span>
              </div>
              <p className="text-sm text-muted-foreground">Transforma tus PDFs en resúmenes brillantes.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Precios</a></li>
                <li><a href="#" className="hover:text-foreground transition">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-foreground transition">Términos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 ResumeAI. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    );
}