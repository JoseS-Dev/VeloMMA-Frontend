import { Link } from "react-router-dom"
import { navBarPages } from "@/utils/features/landing"

export function Header() {
    return (
        <header className="w-full h-20 bg-background border-b border-border flex items-center z-50">
            <nav className="w-full h-full flex items-center px-2 justify-between max-w-7xl mx-auto">
                
                {/* LOGO (Izquierda) */}
                <div className="flex-1 flex items-center">
                    <h1 className="text-xl font-black text-primary italic tracking-wider uppercase font-sans selection:bg-transparent">
                        Velo<span className="text-text-primary">MMA</span>
                    </h1>
                </div>

                {/* NAVEGACIÓN (Centro) */}
                <ul className="flex h-full items-center gap-12 justify-center">
                    {navBarPages.map((page, index) => (
                        <li key={index} className="list-none">
                            <Link 
                                to={page.path} 
                                className="group flex items-center gap-2.5 text-sm font-medium text-text-secondary
                                hover:text-text-primary transition-colors duration-200"
                            >
                                {/* Forzamos a que el icono use group-hover para encenderse en tu rojo primario */}
                                <span className="text-text-tertiary group-hover:text-text-primary transition-colors duration-200">
                                    {page.icon}
                                </span>
                                <span className="font-sans">{page.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* BOTONES DE ACCIÓN (Derecha) */}
                <div className="flex-1 flex items-center gap-3 justify-end">
                    <Link to="/odds" className="bg-primary-dim text-primary border border-primary/30 
                    hover:border-primary hover:bg-primary hover:text-text-primary text-[11px] 
                    font-mono italic tracking-widest py-1.5 px-3.5 rounded transition-all duration-200 
                    focus:outline-none transform active:scale-95 cursor-pointer">
                        Predicciones
                    </Link>
                    <Link to="/rankings" className="bg-primary-dim text-primary border border-primary/30 
                    hover:border-primary hover:bg-primary hover:text-text-primary text-[11px] 
                    font-mono italic tracking-widest py-1.5 px-3.5 rounded transition-all duration-200 
                    focus:outline-none transform active:scale-95 cursor-pointer">
                        Rankings
                    </Link>
                </div>

            </nav>
        </header>
    )
}