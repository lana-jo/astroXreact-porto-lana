import { useEffect, useState } from "react";

export default function Navbar() {
    const [lastScroll, setLastScroll] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setHidden(currentScroll > lastScroll && currentScroll > 10);
            setLastScroll(currentScroll);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [lastScroll]);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Experience", href: "#experience" },
        { label: "Tech Stack", href: "#techstack" },
        { label: "Project", href: "#project" },
        { label: "Certificate", href: "#certif" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`navbar ${hidden ? "navbar--hidden" : ""}`}>

            <a href="#home" className="navbar__logo">
                Lana Jauhar
            </a>

            {/* Hamburger - Mobile Only (hidden on md+) */}
            <button
                className={`navbar__hamburger ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>

            {/* Mobile Dropdown with animation */}
            <div className={`navbar__mobile ${isOpen ? "open" : ""}`}>
                {navLinks.map((item, index) => (
                    <a key={index} href={item.href} onClick={() => setIsOpen(false)}>
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Desktop Links (hidden on mobile) */}
            <ul className="navbar__links">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>

        </nav>
    );
}