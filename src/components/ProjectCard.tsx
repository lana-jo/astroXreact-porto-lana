import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // safe to call multiple times

export default function ProjectCard({ title, image, ...props }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                cardRef.current!,
                { opacity: 0, y: 80, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        },
        { scope: cardRef } // ← important for cleanup
    );

    return (
        <div ref={cardRef} className="project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}