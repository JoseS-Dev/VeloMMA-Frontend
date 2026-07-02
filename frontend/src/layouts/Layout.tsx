import { NavBar } from "@/components/navBar"

export function LayoutStatic({children}: {children: React.ReactNode}) {
    return (
        <div className="w-full flex flex-col h-screen">
            <NavBar/>
            {children}
        </div>
    )
}