"use client"

export default function Sidebar() {
    return (
        <aside className="w-72 border-r bg-white p-4">
            <h2 className="text-lg font-semibold">Etapas</h2>
            <p className="text-sm text-slate-500">Adiciona as estapas do funil</p>

            <div className="mt-6 space-y-3">
                <button className="w-full border rounded-xl p-3 text-left">
                    + Anúncio
                </button>

                <button className="w-full border rounded-xl p-3 text-left">
                    + Página de Destino
                </button>
            </div>
        </aside>
    )
}