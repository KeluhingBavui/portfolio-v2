"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Reveal } from "./custom/reveal";
import { Badge } from "./ui/badge";

interface WorkExperience {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
    skills: string[];
}

const workExperiences: WorkExperience[] = [
    {
        "position": "Executive, System Analyst",
        "company": "Tenaga Nasional Berhad",
        "duration": "August 2024 - Present",
        "responsibilities": [
            "Work in Systems & Architecture team within Grid System Operator division to ensure high availability and optimal functionality of its back-end system and services",
            "More to come!"
        ],
        "skills": []
    },
    {
        "position": "Software Engineer 1",
        "company": "Dell Technologies Inc.",
        "duration": "August 2022 - January 2023, March 2024 - July 2024 · 11 mos",
        "responsibilities": [
            "Write comprehensive unit tests for Dashboard Experience UX to ensure high code coverage",
            "Craft Splunk queries to visualize user behavior for Product Discovery's Quick Search feature",
            "Optimize Dell's Technical Sales Representative workflow and redirection from Dell Sales Application to Product Discovery UX, requiring cross-functional collaboration",
            "Perform security enhancement tasks to maintain the team's microservices compliance with the latest security standards",
            "Collaborated with different product teams to integrate Quick Search micro-frontend into Dell Sales Application",
            "Carry out perfective maintenance tasks on specific microservices by utilizing upgraded RabbitMQ clusters, resulting in improved performance and reliability of the microservices",
            "Interned as a Software Engineer for 6 months before being promoted to Software Engineer 1"
        ],
        "skills": [
            "C#",
            ".NET8",
            "Angular",
            "TypeScript",
            "Microservices",
            "Microfrontend",
            "Full Stack Development",
            "Agile Development",
            "Jira",
            "Java",
            "Spring Boot"
        ]
    },
    {
        "position": "Backend Developer",
        "company": "Revo Global Sdn. Bhd.",
        "duration": "Feb 2023 - March 2024 · 1 yr 2 mos",
        "responsibilities": [
            "Brainstorm, design and plan system architecture based on requirements, encompassing technology decisions such as cloud infrastructure, database management and design paradigms with the objective to ship fast and maintain scalability",
            "Involved in database schema design decisions and setting up required components such as cloud services, databases, domains, authentication and development environments",
            "Guided and collaborated with a team of 3 to develop backend services to scale for web and mobile environments, utilizing REST APIs standards and component-based software engineering",
            "Collaborated with frontend engineers to ensure smooth integration between frontend and backend components",
            "Implemented CI/CD pipelines with GitHub Actions to automate build, test and deployment process of backend services"
        ],
        "skills": [
            "REST API",
            "TypeScript",
            "NestJS",
            "NextJS",
            "Supabase",
            "Tailwind CSS",
            "Jest",
            "Figma",
            "Digital Ocean",
            "Agile Development",
            "CI/CD",
            "Database Management",
            "Unit Testing"
        ]
    },
];

export default function Experiences() {
    const [selectedCompany, setSelectedCompany] = useState<WorkExperience>(workExperiences[0])

    return (
        <section id="experiences" className="bg-background text-foreground sm:py-32 py-16">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Where I've Worked
            </h2>
            <br />
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0 overflow-x-auto md:overflow-x-visible">
                    <div className="flex md:flex-col md:border-l md:border-border">
                        {workExperiences.map((exp) => (
                            <Button
                                key={exp.company}
                                variant="ghost"
                                className={`px-4 py-2 text-sm min-w-[120px] md:w-full justify-start rounded-none ${selectedCompany.company === exp.company
                                    ? "bg-secondary md:border-l-2 md:border-primary"
                                    : ""
                                    }`}
                                onClick={() => setSelectedCompany(exp)}
                            >
                                <span className="truncate" title={exp.company}>
                                    {exp.company}
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4 md:pl-8">
                    <h3 className="text-xl font-semibold mb-1">
                        {selectedCompany.position}{" "}
                        <span className="text-primary">@ {selectedCompany.company}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{selectedCompany.duration}</p>
                    <ul className="space-y-4">
                        {selectedCompany.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start">
                                <ArrowRightIcon className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                <span>{responsibility}</span>
                            </li>
                        ))}
                    </ul>
                    <br />
                    {selectedCompany.skills && (
                        <div className="flex gap-2 flex-wrap">
                            {selectedCompany.skills.map((skill, index) => (
                                <Reveal
                                    key={skill}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, delay: index / 40 } }}
                                >
                                    <Badge variant="default">{skill}</Badge>
                                </Reveal>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section >
    );
}