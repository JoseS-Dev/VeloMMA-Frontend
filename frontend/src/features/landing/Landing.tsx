import { LayoutStatic } from "@/layouts/Layout";
import { Hero } from "@/components/features/landing/Hero";
import { About } from "@/components/features/landing/About";

export function Landing(){
    return (
        <LayoutStatic>
            <Hero/>
            <About/>
        </LayoutStatic>
    )
}