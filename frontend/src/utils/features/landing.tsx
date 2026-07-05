// Lista de paginas del navBar
import { TrendingUp, Calendar, Activity } from "lucide-react";

export const navBarPages = [
    {
        label: "Peleadores",
        icon: <TrendingUp className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:scale-110 transform transition-all duration-200" />,
        path: "/fighters"
    },
    {
        label: "Estadísticas",
        icon: <Activity className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:scale-110 transform transition-all duration-200" />,
        path: "/statistics"
    },
    {
        label: "Eventos",
        icon: <Calendar className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:scale-110 transform transition-all duration-200" />,
        path: "/events"
    },
    
]