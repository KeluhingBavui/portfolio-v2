import projects from '@/lib/projects.json';
import { Reveal } from './custom/reveal';
import { ProjectCard3d } from './custom/project-card-3d';
export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Projects Done
            </h2>
            <div className="flex flex-row flex-wrap gap-x-4 justify-evenly">
                {projects.map((projects, index) => (
                    <Reveal
                        key={projects.title}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                    >
                        <ProjectCard3d
                            title={projects.title}
                            type={projects.type}
                            description={projects.description}
                            imageUrl={projects.imageUrl}
                            githubUrl={projects.githubUrl}
                            demoUrl={projects.demoUrl}
                            skills={projects.skills}
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}