import { InfiniteMovingCards } from "./ui/infinte-moving-cards";
import { fetchFeedbacks } from "@/app/utils/supabase/server";

export default async function Feedbacks() {
    const testimonials: {
        quote: string;
        name: string;
        title: string;
    }[] = [];

    try {
        const data = await fetchFeedbacks();
        if (data) {
            for (const item of data) {
                testimonials.push({
                    quote: item.quote,
                    name: item.name,
                    title: item.title,
                });
            }
        }
    } catch (error) {
        return (
            <section id="feedbacks" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Things People Say</h2>
                <p className="leading-7">Failed to fetch feedbacks. Reload the page to try again</p>
            </section>
        );
    }

    fetchFeedbacks();

    return (
        <section id="feedbacks" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Things People Say</h2>
            {testimonials.length === 0 && (
                <p className="leading-7">No feedbacks to display</p>
            )}
            {testimonials.length > 0 && (
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="normal"
                />
            )}
        </section>
    )
}