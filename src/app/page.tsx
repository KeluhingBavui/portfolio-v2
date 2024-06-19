import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Feedbacks from "@/components/feedbacks";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Separator } from "@/components/ui/separator";

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
            <Feedbacks />
            <Separator />
            <Skills />
            <Separator />
            <Contact />
        </div>
    )
}
