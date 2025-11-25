import { Check, X } from "lucide-react";
import Link from "next/link";

export default function PricingCards({billing} : {billing: string}) {

    {/* Convertir estos planes a la base de datos */}
    const plans = [
        {
            id: 2,
            name: "Basic",
            price: "$1.99",
            priceAnual: "$4.99",
            periodAnual: "/anual",
            period: "/mes",
            description: "Perfecto para probar el servicio",
            content: [
                { text: "5 PDFs por mes", included: true },
                { text: "Hasta 10 páginas por PDF", included: true },
                { text: "Resúmenes básicos", included: true },
                { text: "Exportar en texto plano", included: true },
                { text: "Soporte por email", included: false },
                { text: "Sin anuncios", included: false }
            ],
            highlighted: false
        },
        {
            id: 1,
            name: "Pro",
            price: "$4.99",
            priceAnual:"$11.99",
            periodAnual: "/anual",
            period: "/mes",
            description: "Ideal para estudiantes y profesionales",
            content: [
                { text: "PDFs ilimitados", included: true },
                { text: "Sin límite de páginas", included: true },
                { text: "Resúmenes avanzados con IA", included: true },
                { text: "Exportar en PDF y Markdown", included: true },
                { text: "Highlights y anotaciones", included: true },
                { text: "Soporte prioritario", included: true },
                { text: "Sin anuncios", included: true }
            ],
            highlighted: true
        }
    ];

    return (
        <div className="max-w-6xl w-full">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 shadow-2xl bg-white
                         ${plan.highlighted ? "border-2 border-primary" : "border border-gray-300"}
                        `}
                    >
                        {plan.highlighted && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary rounded-full">
                                <span className="text-white px-6 py-1 text-sm font-bold">
                                    Más Popular
                                </span>
                            </div>
                        )}

                        <div className="text-center mb-6">
                            <h3 className={`text-2xl font-bold mb-2 text-black`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mb-4 text-slate-600`}>
                                {plan.description}
                            </p>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl font-bold">{billing == "anual" ? plan.priceAnual : plan.price}</span>
                                <span className={`text-lg text-slate-600`}>
                                    {billing == "anual" ? plan.periodAnual : plan.period}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {plan.content.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    {item.included ? (
                                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-green-500" : "text-green-500"}`} />
                                    ) : (
                                        <X className={`w-5 h-5 flex-shrink-0 text-slate-400`} />
                                    )}
                                    <span className={`text-sm ${item.included ? "text-slate-700" : "text-slate-400"}`}>
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>


                        {/* Verificar como producir el href.*/}
                        {/* Lo ideal seria, poner una instancia de incio del pago antes.*/}
                        <Link
                            href={`/checkout/priceId=${plan.id}`}
                        >
                            <button
                                className={`w-full py-3 px-6 rounded-lg transition-all duration-200 ${
                                    plan.highlighted
                                        ? "btn-primary shadow-lg"
                                        : "bg-gray-200 text-black hover:bg-gray-300"
                                }`}
                            >
                                Comenzar ahora
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}