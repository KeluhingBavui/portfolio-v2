import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectCardProps {
    title: string;
    type: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
}

export function ProjectCard3d({ title, type, description, imageUrl, githubUrl, demoUrl, skills }: ProjectCardProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto w-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="w-full mt-4">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                        <Image
                            src={imageUrl}
                            alt="Project Image"
                            fill
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                </CardItem>
                <CardItem
                    as="h3"
                    translateZ="60"
                    className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm text-muted-foreground"
                >
                    {type}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="50"
                    className="leading-7 [&:not(:first-child)]:mt-6"
                >
                    {description}
                </CardItem>
                {skills && (
                    <CardItem
                        translateZ="40"
                        className="flex gap-2 flex-wrap mt-6"
                    >
                        {skills.map((skill) => (
                            <Badge key={skill} variant="default">{skill}</Badge>
                        ))}
                    </CardItem>
                )}
                <div className="flex justify-between items-center mt-10">
                    {githubUrl && (
                        <CardItem
                            translateZ={30}
                        >
                            <Link href={githubUrl} target="_blank" passHref>
                                <Button variant="link">
                                    Link To Github
                                    <ExternalLink className="ml-2" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                    {demoUrl && (
                        <CardItem
                            translateZ={30}
                        >
                            <Link href={demoUrl} target="_blank" passHref>
                                <Button>
                                    Live URL
                                    <ExternalLink className="ml-2" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                </div>
            </CardBody>
        </CardContainer>
    )
}