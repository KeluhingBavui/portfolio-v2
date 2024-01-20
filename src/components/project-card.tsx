import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    type: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
}

export function ProjectCard({ title, type, description, imageUrl, githubUrl, demoUrl, skills }: ProjectCardProps) {
    return (
        <Card className="flex flex-col w-full justify-between">
            <div>
                <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                        src={imageUrl}
                        alt="Project Image"
                        fill
                        className="rounded-md object-cover"
                    />
                </AspectRatio>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{type}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div>
                        <p className="leading-7">{description}</p>
                    </div>
                    {skills && (
                        <div className="flex gap-2 flex-wrap">
                            {skills.map((skill) => (
                                <Badge key={skill} variant="default">{skill}</Badge>
                            ))}
                        </div>
                    )}
                </CardContent>
            </div>
            <CardFooter className="gap-2 justify-between">
                {githubUrl && (
                    <Link href={githubUrl} target="_blank" passHref>
                        <Button variant="link">
                            Link To Github
                            <ExternalLink className="ml-2" />
                        </Button>
                    </Link>
                )}
                {demoUrl && (
                    <Link href={demoUrl} target="_blank" passHref>
                        <Button>
                            Live URL
                            <ExternalLink className="ml-2" />
                        </Button>
                    </Link>
                )}
            </CardFooter>
        </Card>
    )
}