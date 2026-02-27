import { useEffect, useState } from "react";
import { useLanguage } from "../data/LanguangeContext.jsx";


export default function Navbar() {
    const [lastScroll, setLastScroll] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <nav
            className="menu card"
            style={{
                transform: hidden ? "translateY(-100%)" : "translateY(0)",
                transition: "transform 0.3s ease",
            }}
        >
            <a href="#home">Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#techstack">Tech Stack</a>
            <a href="#porto">Porto</a>
            <a href="#certif">Certificate</a>

        </nav>
    );
}