import { useEffect, useState, useRef } from "react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const idleTimeoutRef = useRef(null);
    
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            // Hide navbar when scrolling
            setHidden(true);
            
            // Clear previous timeout
            if (idleTimeoutRef.current) {
                clearTimeout(idleTimeoutRef.current);
            }
            
            // Show navbar after 150ms of no scrolling (idle)
            idleTimeoutRef.current = setTimeout(() => {
                setHidden(false);
            }, 130);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            if (idleTimeoutRef.current) {
                clearTimeout(idleTimeoutRef.current);
            }
        };
    }, []);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Organization", href: "#organization" },
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