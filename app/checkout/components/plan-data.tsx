import { Separator } from "@/components/ui/separator";
import { Check, Dot, Shield, ShieldCheck } from "lucide-react";

interface PlanDataType {
    planId?: string
}

export default async function PlanData({planId}: PlanDataType) {
    //{ Logica preparada para cuando se tenga la base de datos }
    // const plan = await getPlansById(planId)
    
    return (
        <div className="flex flex-col gap-4">
            {/* Etiqueta del plan */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="text-xs uppercase tracking-wide text-sky-700 font-semibold">
                    Plan Pro
                </span>

                {/*
                    <span className="text-xs uppercase tracking-wide text-sky-700 font-semibold">
                        {plan.name}
                    </span>
                */}
            </div>

            {/* Tarjeta principal */}
            <div className="w-full max-w-sm rounded-2xl bg-card pt-6 text-foreground border border-border shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
                <div className="flex flex-col px-6">

                    {/* Encabezado de resumen */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Resumen del pago
                            </p>
                            <p className="mt-1 text-sm text-slate-600">
                                Acceso completo al plan profesional 
                            </p>
                            {/*
                                <p className="mt-1 text-sm text-slate-600">
                                    {plan.name} 
                                </p>
                            */}
                        </div>
                    </div>

                    <Separator className="mb-3 bg-white/5" />

                    {/* Detalle de precios */}
                    <table className="w-full text-xs sm:text-sm">
                        <tbody className="[&>tr>td:first-child]:text-slate-500">
                            {/* Precio base */}
                            <tr className="border-b border-slate-100">
                                <td className="py-3">Precio base</td>
                                <td className="py-3 text-right font-semibold text-slate-900">
                                    10.00 US$
                                </td>

                                {/*
                                    <td className="py-3 text-right font-semibold text-slate-900">
                                        {plan.price}
                                    </td>
                                */}
                            </tr>

                            {/* Total */}
                            <tr>
                                <td className="py-3 text-lg font-semibold text-slate-900">
                                    Total a pagar hoy
                                </td>
                                <td className="py-3 text-right">
                                    <span className="text-xl font-extrabold text-sky-700">
                                        $10.00
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Nota informativa */}
                    <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-[11px] text-slate-500">
                        <p>
                            La suscripción se renovará automáticamente. Podrás cancelar en cualquier momento desde tu panel de usuario.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 text-center border-t rounded-b-2xl border-slate-200 bg-slate-100  py-3 text-[11px] text-slate-500">
                    <ShieldCheck className="size-5"/>
                    <p>
                        Pago 100% seguro con cifrado SSL
                    </p>
                </div>
            </div>

            <div>
                <header className="mb-2">
                    <p className="font-semibold">Tu plan incluye:</p>
                </header>

                {/*
                    {
                        plan.content.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center"
                            >
                                <div className="bg-primar rounded-full ">
                                    <Check className="size-4"/>
                                </div>
                                <span>{item.label}</span>
                            </div>
                        ))
                    }
                */}

                <div
                    className="flex items-center gap-3"
                >
                    <div className="bg-primary p-1 rounded-full ">
                        <Check className="size-4" strokeWidth={3}/>
                    </div>
                    <span className="text-slate-500">Todo lo del plan anual</span>
                </div>
            </div>
        </div>
    );
}