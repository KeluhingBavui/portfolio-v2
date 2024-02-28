import { Reveal } from "./reveal";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    description: string;
    skills?: string[];
}

export function ExperienceCard({ title, company, date, description, skills }: ExperienceCardProps) {
    return (
        <Card className="w-full">
            <Reveal
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >
                <CardHeader>
                    <CardTitle>{title} · {company}</CardTitle>
                    <CardDescription>{date}</CardDescription>
                </CardHeader>
            </Reveal>
            <CardContent className="flex flex-col gap-4">
                <Reveal
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                >
                    <p className="leading-7">{description}</p>
                </Reveal>
                {skills && (
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                    >
                        <div className="flex gap-2 flex-wrap">
                            {skills.map((skill) => (
                                <Badge key={skill} variant="default">{skill}</Badge>
                            ))}
                        </div>
                    </Reveal>
                )}
            </CardContent>
        </Card>
    )
}