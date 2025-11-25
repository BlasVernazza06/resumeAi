'use client'
import { useState } from "react";
import PricingCards from "@/app/components/pricing-cards";

export default function Pricing() {
    const [active, setActive] = useState("mensual");

    return (
        <div id="pricing" className="w-full flex flex-col items-center justify-center mt-40">
            <header className="flex flex-col text-center items-center gap-4 mb-10">

                <div className="w-max rounded-full bg-muted px-3 py-1 border border-border">
                    <span>Nuestros Precios</span>
                </div>

                <h3>
                    Elige el Plan que me mejor se adapte a{" "}
                    <span className="relative inline-block">
                        <span className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 opacity-60 transform -skew-y-3 -rotate-1 rounded"></span>
                        <span className="relative px-2 font-bold">Ti</span>
                    </span>
                </h3>

                {/* SWITCH */}
                <div className="relative bg-gray-300 rounded-full p-1 inline-grid grid-cols-2">
                    {/* Fondo que se mueve (ocupa la celda exacta del botón activo) */}
                    <div
                        className={`absolute inset-1 rounded-full bg-white shadow transition-transform duration-300
                            ${active === "anual" ? "translate-x-full" : "translate-x-0"}
                        `}
                        style={{
                            width: "calc(50% - 4px)", // mismo ancho que cada celda menos padding
                        }}
                    />

                    {/* Mensual */}
                    <button
                        onClick={() => setActive("mensual")}
                        className={`relative z-10 flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition
                            ${active === "mensual" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                        `}
                    >
                        Mensual
                    </button>

                    {/* Anual */}
                    <button
                        onClick={() => setActive("anual")}
                        className={`relative z-10 flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition
                            ${active === "anual" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                        `}
                    >
                        Anual
                    </button>
                </div>
            </header>

            <div>
                <PricingCards billing={active} />
            </div>
        </div>
    );
}
