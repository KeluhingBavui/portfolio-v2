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
                    I'm a person who loves making stuff, especially things you can see and interact. Back when I was 13, I got into creating custom game maps for Warcraft III Frozen Throne, making videos with Sony Vegas, and cooking up tunes with FL Studio. Then in 2018, during my foundation year, I stumbled upon programming and got hooked on web development. Haven't looked back since.
                    <br />
                    <br />
                    Fast-forward to today, I've successfully earned my Software Engineering degree from Universiti Malaya. Along the way, I had the privilege of contributing to software development for a startup in Malaysia and also a multinational corporation. Not to mention the countless hours spent on personal projects and hackathons.
                    <br />
                    <br />
                    Presently, my primary focus revolves around mastering the art of building high-quality and scalable software applications, continuously refining my skills in both frontend and backend development. As the saying goes, <em>"Once you go fullstack, you never go back"</em>.
                    <br />
                    <br />
                    When I'm not coding, I usually play games, play badminton/volleyball or binge-watch Youtube videos.
                </p>
            </Reveal>
        </section>
    );
}