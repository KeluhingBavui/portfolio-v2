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
            <CardHeader>
                <CardTitle>{title} · {company}</CardTitle>
                <CardDescription>{date}</CardDescription>
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
        </Card>
    )
}