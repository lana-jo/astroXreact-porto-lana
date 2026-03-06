
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
    const sections = gsap.utils.toArray(
        "main.portofolio > header, main.portofolio > section"
    );

    // 🔹 Reveal per section
    sections.forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
        });
    });

    // 🔹 Snap antar section (smooth)
    ScrollTrigger.create({
        snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.5,
            ease: "power1.inOut",
        },
    });

    // 🔥 Close-up + pin Certificate
    const certif = document.querySelector("#certif");

    if (certif) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: certif,
                start: "top center",
                end: "+=100%",
                scrub: true,
                pin: true,
            },
        });

        tl.to(certif, {
            scale: 1.12,
            duration: 1,
            ease: "power2.out",
        });

        tl.from(
            "#certif .certificate-item",
            {
                opacity: 0,
                y: 60,
                stagger: 0.2,
                duration: 0.8,
            },
            "-=0.5"
        );
    }
}