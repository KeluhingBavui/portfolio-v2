import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Feedbacks from "@/components/feedbacks";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Hero />
            <Separator />
            <About />
            <Separator />
            <Experiences />
            <Separator />
            <Projects />
            <Separator />
            <Suspense fallback={
                <section id="feedbacks" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
                    <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                        Things People Say
                    </h2>
                    <div className="flex flex-row space-x-8">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    </div>
                </section>
            }>
                <Feedbacks />
            </Suspense>
            <Separator />
            <Skills />
            <Separator />
            <Contact />
        </div>
    )
}
