import { Brain, FileCheck, ScrollText } from "lucide-react";

export default function HowWorksSection() {
    return (
        <div id="features" className="flex flex-col lg:flex-row items-center justify-center gap-20 mt-20">
            <div className="flex flex-col w-60 items-center justify-center text-center">
                <div className="animate-[fadeIn_0.5s_ease-in_1s_forwards]" style={{ animationDelay: '0s', animationDuration: '1s',}}>
                    <ScrollText className="size-15"/>
                </div>
                <h4 className="mt-4">Sube tu PDF</h4>
                <span className="text-sm sm:text-lg">Selecciona o arrastra tu documento PDF. Soportamos archivos de hasta 50MB</span>
            </div>
            
            {/* Flecha animada que aparece después */}
            <div className="opacity-0 animate-[fadeIn_0.5s_ease-in_1.5s_forwards]">
                <svg className="w-8 h-8 text-blue-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>
            
            <div className="flex flex-col w-60 items-center justify-center text-center">
                <div className="opacity-0 animate-[spinAndFade_2s_ease-in-out_1.5s_forwards]">
                    <Brain className="size-15"/>
                </div>
                <h4 className="mt-4">La IA lo procesa</h4>
                <span className="text-sm sm:text-lg">Nuestra IA analiza el contenido y extrae los puntos mas importantes automáticamente.</span>
            </div>
            
            {/* Flecha animada que aparece después */}
            <div className="opacity-0 animate-[fadeIn_0.5s_ease-in_2.5s_forwards]">
                <svg className="w-8 h-8 text-blue-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>
            
            <div className="flex flex-col w-60 items-center justify-center text-center">
                <div className="opacity-0 animate-[bounceIn_0.8s_ease-out_3s_forwards]">
                    <FileCheck className="size-15"/>
                </div>
                <h4 className="mt-4">Obten tu Resumen</h4>
                <span className="text-sm sm:text-lg">Recibe un resumen limpio, formateado y listo para compartir o editar</span>
            </div>
        </div>
    );
}