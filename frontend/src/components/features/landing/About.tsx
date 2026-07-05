export function About() {
    return (
        <section className="relative w-full min-h-screen bg-[#0D0D0E] flex flex-col md:flex-row items-center px-6 sm:px-12 lg:px-24 py-20 md:py-0 gap-12 overflow-hidden">
            
            {/* 📝 ARTÍCULO IZQUIERDO: INFORMACIÓN */}
            <article className="w-full md:w-1/2 h-full flex flex-col items-start justify-center text-left gap-6 z-10">
                
                {/* Badge de contexto */}
                <span className="bg-[#161618] text-[#D23A11] text-xs font-mono tracking-widest uppercase py-1 px-3 rounded border border-[#2C2C2E]">
                    // MÁS ALLÁ DEL COMBATE
                </span>

                {/* Título Principal */}
                <h2 className="text-3xl sm:text-5xl font-black italic uppercase font-sans tracking-tight text-[#F2F2F4] leading-none">
                    LA CIENCIA DETRÁS <br />
                    <span className="text-[#D23A11]">DEL GOLPE</span>
                </h2>

                {/* Línea decorativa corta */}
                <div className="w-16 h-[3px] bg-[#D23A11]" />

                {/* Bloque de Textos descriptivos */}
                <div className="flex flex-col gap-4 max-w-xl">
                    <p className="text-[#A1A1A6] text-base font-sans leading-relaxed">
                        En <span className="text-[#F2F2F4] font-semibold">VeloMMA</span> eliminamos las suposiciones del análisis deportivo. No nos basamos en quién "parece" más fuerte; desglosamos miles de datos por asalto para mapear patrones reales de rendimiento.
                    </p>
                    <p className="text-[#7E7E82] text-sm font-sans leading-relaxed">
                        Desde la fatiga acumulada en el *grappling* hasta la velocidad de reacción en combinaciones de *striking*. Nuestra plataforma procesa variables complejas para ofrecerte proyecciones numéricas limpias y precisas sobre cada cartelera de la UFC.
                    </p>
                </div>

                {/* Una mini métrica destacada para rellenar con estilo de datos */}
                <div className="flex gap-8 border-t border-[#2C2C2E] pt-6 mt-2 w-full">
                    <div>
                        <span className="block font-mono text-2xl font-bold text-[#F2F2F4]">50+</span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E7E82]">Variables por Peleador</span>
                    </div>
                    <div>
                        <span className="block font-mono text-2xl font-bold text-[#30D158]">Real-time</span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E7E82]">Modelos Predictivos</span>
                    </div>
                </div>

            </article>

            {/* 🖼️ ARTÍCULO DERECHO: IMAGEN CON EFECTO TECH */}
            <article className="w-full md:w-1/2 h-full flex items-center justify-center relative z-10">
                
                {/* Efecto de luz roja de fondo (Glow) detrás de la imagen */}
                <div className="absolute w-72 h-72 bg-[#D23A11]/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Contenedor estilizado de la imagen */}
                <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square bg-[#161618] border border-[#2C2C2E] rounded-xl p-3 shadow-2xl group hover:border-[#D23A11]/30 transition-all duration-500">
                    
                    {/* Detalles estéticos en las esquinas estilo HUD militar/tecnológico */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D23A11]/50 rounded-tl-md" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D23A11]/50 rounded-br-md" />

                    {/* La Imagen real */}
                    <img 
                        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop" // Imagen de muestra de MMA de alta calidad
                        alt="Análisis táctico MMA" 
                        className="w-full h-full object-cover rounded-lg grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                    />

                    {/* Overlay sutil de escáner de datos encima de la foto */}
                    <div className="absolute inset-3 bg-gradient-to-t from-[#0D0D0E]/80 via-transparent to-transparent flex items-end p-4 rounded-lg">
                        <span className="font-mono text-[10px] text-[#A1A1A6] tracking-widest uppercase">
                            SYSTEM_STATUS // ACTIVE_SCAN
                        </span>
                    </div>
                </div>

            </article>

            {/* Línea divisoria inferior con gradiente */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D23A11] via-30% to-[#0A84FF] opacity-40" />
            
        </section>
    )
}