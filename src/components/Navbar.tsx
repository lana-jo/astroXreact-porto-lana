import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../data/social';

type Theme = 'light' | 'dark' | 'system';

const THEME_ICONS: Record<Theme, string> = {
	light: '☀️',
	dark: '🌙',
	system: '🌓'
};

const themeOptions: { id: Theme; label: string }[] = [
	{ id: 'light', label: 'Light' },
	{ id: 'dark', label: 'Dark' },
	{ id: 'system', label: 'System' }
];

function resolveTheme(theme: Theme): 'light' | 'dark' {
	return theme === 'system'
		? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		: theme;
}

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [theme, setTheme] = useState<Theme>('system');
	const [showThemeMenu, setShowThemeMenu] = useState(false);
	const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const themeMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const applyTheme = (target: Theme) => {
			document.documentElement.setAttribute('data-theme', resolveTheme(target));
		};

		const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
		setTheme(savedTheme);
		applyTheme(savedTheme);

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = (e: MediaQueryListEvent) => {
			if (localStorage.getItem('theme') === 'system') {
				document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
				setShowThemeMenu(false);
			}
		};

		const handleResize = () => {
			if (window.innerWidth >= 768) setIsOpen(false);
		};

		const handleScroll = () => {
			setHidden(true);
			if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
			idleTimeoutRef.current = setTimeout(() => setHidden(false), 130);
		};

		mediaQuery.addEventListener('change', handleSystemChange);
		document.addEventListener('mousedown', handleClickOutside);
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);

		return () => {
			mediaQuery.removeEventListener('change', handleSystemChange);
			document.removeEventListener('mousedown', handleClickOutside);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
			if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
		};
	}, []);

	const handleThemeChange = (newTheme: Theme) => {
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', resolveTheme(newTheme));
		setShowThemeMenu(false);
	};

	return (
		<nav className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
			<a href="#home" className="navbar__logo">
				Lana Jauhar
			</a>

			<div className="theme-select-container" ref={themeMenuRef}>
				<button
					className="theme-toggle-btn"
					onClick={() => setShowThemeMenu((open) => !open)}
					aria-label="Select theme"
					aria-expanded={showThemeMenu}
				>
					<span>{THEME_ICONS[theme]}</span>
				</button>

				{showThemeMenu && (
					<div className="theme-dropdown-menu">
						{themeOptions.map((opt) => (
							<button
								key={opt.id}
								className={`theme-dropdown-option ${theme === opt.id ? 'active' : ''}`}
								onClick={() => handleThemeChange(opt.id)}
							>
								<span>{THEME_ICONS[opt.id]}</span>
								{opt.label}
							</button>
						))}
					</div>
				)}
			</div>

			<ul className="navbar__links">
				{navLinks.map((item) => (
					<li key={item.href}>
						<a href={item.href}>{item.label}</a>
					</li>
				))}
			</ul>

			<button
				className={`navbar__hamburger ${isOpen ? 'active' : ''}`}
				onClick={() => setIsOpen((open) => !open)}
				aria-label="Toggle menu"
				aria-expanded={isOpen}
			>
				<span />
				<span />
				<span />
			</button>

			<div className={`navbar__mobile ${isOpen ? 'open' : ''}`}>
				{navLinks.map((item) => (
					<a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
						{item.label}
					</a>
				))}
			</div>
		</nav>
	);
}
