import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

    const navLinks = [
        { label: "Home", href: "#home" },
        // { label: "About Me", href: "#aboutme" },
        { label: "Experience", href: "#experience" },
        { label: "Tech Stack", href: "#techstack" },
        { label: "Project", href: "#project" },
        { label: "Certificate", href: "#certif" },
        { label: "Contact", href: "#contact" },

    ];

    return (
        <nav
            className="menu card"
            style={{
                transform: hidden ? "translateY(-100%)" : "translateY(0)",
                transition: "transform 0.3s ease",
            }}
        >
            {navLinks.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ display: "inline-block" }}
                >
                    {item.label}
                </motion.a>
            ))}
        </nav>
    );
}