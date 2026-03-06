import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExampleSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.from(el.querySelectorAll(".card"), {
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

    }, []);

    return (
        <section ref={sectionRef} className="py-20">
            <div className="card">Project 1</div>
            <div className="card">Project 2</div>
            <div className="card">Project 3</div>
        </section>
    );
}