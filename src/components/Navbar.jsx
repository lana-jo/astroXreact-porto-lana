import { useEffect, useState, useRef } from "react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("system");
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const idleTimeoutRef = useRef(null);
    const themeMenuRef = useRef(null);

    useEffect(() => {
        // Fungsi untuk menerapkan tema ke dokumen (root element)
        const applyTheme = (targetTheme) => {
            let actualTheme = targetTheme;
            if (targetTheme === "system") {
                actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }
            document.documentElement.setAttribute("data-theme", actualTheme);
        };

        // Inisialisasi tema dari localStorage atau default system
        const savedTheme = localStorage.getItem("theme") || "system";
        setTheme(savedTheme);
        applyTheme(savedTheme);

        // Listener untuk perubahan tema sistem OS
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemChange = (e) => {
            if (localStorage.getItem("theme") === "system") {
                const newTheme = e.matches ? "dark" : "light";
                document.documentElement.setAttribute("data-theme", newTheme);
            }
        };

        mediaQuery.addEventListener("change", handleSystemChange);

        // Penanganan klik di luar menu untuk menutup dropdown
        const handleClickOutside = (event) => {
            if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
                setShowThemeMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        // Resize dan scroll behavior
        const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
        const handleScroll = () => {
            setHidden(true);
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
            idleTimeoutRef.current = setTimeout(() => setHidden(false), 130);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            mediaQuery.removeEventListener("change", handleSystemChange);
            document.removeEventListener("mousedown", handleClickOutside);
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
        };
    }, []);

    // Fungsi update saat user memilih tema dari dropdown
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        
        let actualTheme = newTheme;
        if (newTheme === "system") {
            actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        document.documentElement.setAttribute("data-theme", actualTheme);
        setShowThemeMenu(false);
    };

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Organization", href: "#organization" },
        { label: "Experience", href: "#experience" },
        { label: "Tech Stack", href: "#techstack" },
        { label: "Project", href: "#project" },
        { label: "Certificate", href: "#certif" },
        { label: "Contact", href: "#contact" },
    ];

    const themeOptions = [
        { id: "light", label: "Light", icon: "☀" },
        { id: "dark", label: "Dark", icon: "☾" },
        { id: "system", label: "System", icon: "◎" },
    ];

    return (
        <nav className={`navbar ${hidden ? "navbar--hidden" : ""}`}>
            <a href="#home" className="navbar__logo">
                Lana Jauhar
            </a>

            <div className="theme-select-container" ref={themeMenuRef} style={{ position: 'relative', display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '1.5rem' }}>
                <button 
                    className="theme-toggle-btn" 
                    onClick={() => setShowThemeMenu(!showThemeMenu)}
                    aria-label="Select theme"
                    style={{ background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '14px' }}
                >
                    {theme === "light" ? "☀" : theme === "dark" ? "☾" : "◎"}
                </button>
                
                {showThemeMenu && (
                    <div className="theme-dropdown-menu" style={{ position: 'absolute', top: 'calc(100% + 10px)', right: '0', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.35rem', display: 'flex', flexDirection: 'column', gap: '2px', zIndex: '1002', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        {themeOptions.map((opt) => (
                            <button 
                                key={opt.id}
                                className={`theme-dropdown-option ${theme === opt.id ? 'active' : ''}`}
                                onClick={() => handleThemeChange(opt.id)}
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 10px', width: '100%', border: 'none', background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer', borderRadius: '6px', textAlign: 'left', fontSize: '0.82rem' }}
                            >
                                <span style={{ fontSize: '13px' }}>{opt.icon}</span>
                                {opt.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Desktop Links */}
            <ul className="navbar__links">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>

            {/* Hamburger - Mobile Only */}
            <button
                className={`navbar__hamburger ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>

            {/* Mobile Dropdown */}
            <div className={`navbar__mobile ${isOpen ? "open" : ""}`}>
                {navLinks.map((item, index) => (
                    <a key={index} href={item.href} onClick={() => setIsOpen(false)}>
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
