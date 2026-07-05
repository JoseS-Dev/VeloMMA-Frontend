import { Header } from "@/components/shared/Header"

export function LayoutStatic({children}: {children: React.ReactNode}) {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Header/>
            {children}
        </div>
    )
}