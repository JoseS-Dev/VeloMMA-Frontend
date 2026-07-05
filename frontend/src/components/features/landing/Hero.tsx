export function Hero() {
    return (
        <section className="relative w-full h-screen bg-background overflow-hidden flex 
        flex-col items-center justify-center px-4 pb-12">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary 
            to-transparent opacity-70" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 
            bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* CONTENIDO PRINCIPAL */}
            <article className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
                <h2 className="text-4xl sm:text-6xl font-black text-text-primary uppercase tracking-tight 
                italic font-sans leading-none">
                    EL PODER DE LOS DATOS <br />
                    <span className="text-primary">DENTRO DEL OCTÁGONO</span>
                </h2>
                <p className="text-text-tertiary text-base sm:text-lg max-w-xl font-normal 
                font-sans leading-relaxed">
                    Analiza métricas avanzadas, tendencias de golpeo y modelos predictivos de la UFC con 
                    precisión quirúrgica.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 
                    text-text-primary font-bold text-sm uppercase tracking-wider py-3 px-8 
                    rounded transition-all shadow-lg shadow-primary/20 active:scale-95 cursor-pointer">
                        Explorar Estadísticas
                    </button>
                    <button className="w-full sm:w-auto bg-background border border-border 
                    hover:border-primary text-text-secondary font-medium text-sm py-3 px-8 
                    rounded transition-all active:scale-95 cursor-pointer">
                        Ver Próximo Evento
                    </button>
                </div>

            </article>

            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent 
            via-primary via-30% to-secondary opacity-40" />
            
        </section>
    )
}