"use client";

import { createBrowserClient } from "@supabase/ssr";
import { InfiniteMovingCards } from "./ui/infinte-moving-cards";
import { Database } from "@/types/supabase";

export default async function Feedbacks() {
    const testimonials: {
        quote: string;
        name: string;
        title: string;
    }[] = [];

    const supabase = createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data, error } = await supabase
        .from('feedback')
        .select()
        .eq('display', true);

    if (error) {
        console.error(error);
        return (
            <section id="feedbacks" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Things People Say</h2>
                <p className="leading-7 text-center">Failed to fetch feedbacks. Reload the page to try again.</p>
            </section>
        );
    }

    if (!data || data.length === 0) {
        return (
            <section id="feedbacks" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Things People Say</h2>
                <p className="leading-7 text-center">No feedbacks to display</p>
            </section>
        );
    }

    data.forEach((item) => {
        testimonials.push({
            quote: item.quote,
            name: item.name,
            title: item.title,
        });
    });

    return (
        <section id="feedbacks" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Things People Say</h2>
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
            />
        </section>
    )
}