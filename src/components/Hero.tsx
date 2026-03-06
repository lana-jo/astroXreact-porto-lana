/*
import { motion } from "motion/react";

export default  Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white">
            <div className="text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-6xl md:text-7xl font-bold mb-4"
                >
                    Halo, aku Lana 👋
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-2xl md:text-3xl text-purple-300 mb-8"
                >
                    Frontend Developer • Astro + React
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black font-semibold rounded-full text-lg"
                >
                    Lihat Proyek Saya
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;*//*
gsap.from(".card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
    }
});*/
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <section ref={heroRef} className="hero">
            <h1 className="text-4xl font-bold">Hello, I'm Lana</h1>
            <p>Frontend & Backend Developer</p>
        </section>
    );
}