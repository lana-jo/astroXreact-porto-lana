// src/components/Navbar.jsx
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Desktop links */}
            <ul className="nav-links">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>

            {/* Hamburger button — mobile only */}
            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
            </button>

            {/* Mobile dropdown */}
            {isOpen && (
                <ul className="mobile-menu">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setIsOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}