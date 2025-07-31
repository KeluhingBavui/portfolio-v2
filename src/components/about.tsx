import { Reveal } from "./custom/reveal";

export default function About() {
    return (
        <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16">
            <h2 id="about" className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                About Me
            </h2>
            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            >
                <p className="leading-7">
                    Over the past few years, I’ve navigated a wide spectrum of roles in tech—starting as a backend developer at a startup, stepping into fullstack development at Dell Technologies, and now expanding into system analysis and solution delivery at Tenaga Nasional Berhad. Each step has deepened my technical skills and broadened my understanding of how tech drives impact within complex organizations.
                    <br />
                    <br />
                    At Dell, I worked as a fullstack software engineer on product teams supporting core business systems, contributing to both microservices and microfrontend architecture. Moving into my current role, I’ve taken on a wider scope—beyond development, I now lead initiatives involving system design, project planning, stakeholder engagement, observability, and technical support. It’s a role that challenges me to wear many hats, and I genuinely enjoy rising to the occasion.
                    <br />
                    <br />
                    Technically, I’m grounded in .NET, Angular, Nextjs, MySQL, and IIS. I’ve led the adoption of GitLab within my team and introduced observability tools like Prometheus and Grafana to improve system transparency and performance monitoring. I’m also keen on exploring cloud platforms like AWS and Microsoft Azure to deepen my understanding of modern infrastructure practices.
                    <br />
                    <br />
                    What keeps me motivated is solving meaningful problems, building tools that improve the way teams work, and seeing the results in action. I’m often described as collaborative, adaptable, and dependable—with a mindset focused on ownership, empathy, and continuous learning.
                    <br />
                    <br />
                    Having worked across startup, enterprise, and public sector environments, I’ve learned that delivering great tech goes beyond the code—it’s about communication, respect, and working with others toward a shared goal.
                    <br />
                    <br />
                    Currently, I’m continuing to sharpen my fullstack expertise while exploring cloud architecture and observability in greater depth. I’m also open to stepping into leadership roles as I grow, especially where I can guide teams and contribute to long-term technical strategy.
                </p>
            </Reveal>
        </section>
    );
}