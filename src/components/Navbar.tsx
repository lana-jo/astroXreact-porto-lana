import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../data/social';

type Theme = 'light' | 'dark' | 'system';
type Lang = 'en' | 'id';

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

const LANG_OPTIONS: { id: Lang; label: string }[] = [
	{ id: 'en', label: 'English' },
	{ id: 'id', label: 'Indonesia' }
];

function resolveTheme(theme: Theme): 'light' | 'dark' {
	return theme === 'system'
		? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		: theme;
}	export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [theme, setTheme] = useState<Theme>('system');
	const [lang, setLang] = useState<Lang>(() =>
		window.location.pathname.startsWith('/id') ? 'id' : 'en'
	);
	const [showThemeMenu, setShowThemeMenu] = useState(false);
	const [showLangMenu, setShowLangMenu] = useState(false);
	const themeMenuRef = useRef<HTMLDivElement>(null);
	const langMenuRef = useRef<HTMLDivElement>(null);

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
			if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
				setShowLangMenu(false);
			}
		};

		const handleResize = () => {
			if (window.innerWidth >= 768) setIsOpen(false);
		};

		mediaQuery.addEventListener('change', handleSystemChange);
		document.addEventListener('mousedown', handleClickOutside);
		window.addEventListener('resize', handleResize);

		return () => {
			mediaQuery.removeEventListener('change', handleSystemChange);
			document.removeEventListener('mousedown', handleClickOutside);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		let idleTimer: ReturnType<typeof setTimeout> | undefined;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrolled(currentScrollY > 10);

			if (isOpen) {
				setHidden(false);
				return;
			}

			if (idleTimer) clearTimeout(idleTimer);

			if (currentScrollY > 100) {
				setHidden(true);
				idleTimer = setTimeout(() => setHidden(false), 300);
			} else {
				setHidden(false);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (idleTimer) clearTimeout(idleTimer);
		};
	}, [isOpen]);

	const handleThemeChange = (newTheme: Theme) => {
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', resolveTheme(newTheme));
		setShowThemeMenu(false);
	};

	const handleLangChange = (newLang: Lang) => {
		// Language is determined by URL: / for English, /id/ for Indonesian
		if (newLang !== lang) {
			window.location.href = newLang === 'id' ? '/id/' : '/';
		}
		setShowLangMenu(false);
	};

	return (
		<nav className={`navbar ${hidden ? 'navbar--hidden' : ''} ${scrolled ? 'navbar--scrolled' : ''}`}>
			<a href="#home" className="navbar__logo">
				Lana Jauhar
			</a>

			<div className="lang-select-container" ref={langMenuRef}>
				<button
					className="lang-toggle-btn"
					onClick={() => setShowLangMenu((open) => !open)}
					aria-label="Select language"
					aria-expanded={showLangMenu}
				>
					<span>{lang === 'id' ? 'ID' : 'EN'}</span>
				</button>

				{showLangMenu && (
					<div className="theme-dropdown-menu" role="menu" aria-label="Language options">
						{LANG_OPTIONS.map((opt) => (
							<button
								key={opt.id}
								className={`theme-dropdown-option ${lang === opt.id ? 'active' : ''}`}
								onClick={() => handleLangChange(opt.id)}
								role="menuitem"
							>
								<span>{opt.label}</span>
							</button>
						))}
					</div>
				)}
			</div>

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
					<div className="theme-dropdown-menu" role="menu" aria-label="Theme options">
						{themeOptions.map((opt) => (
							<button
								key={opt.id}
								className={`theme-dropdown-option ${theme === opt.id ? 'active' : ''}`}
								onClick={() => handleThemeChange(opt.id)}
								role="menuitem"
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
						<a href={item.href}>
							<span lang="en">{item.label}</span>
							<span lang="id">{item.labelId}</span>
						</a>
					</li>
				))}
			</ul>

			<button
				className={`navbar__hamburger ${isOpen ? 'active' : ''}`}
				onClick={() => setIsOpen((open) => !open)}
				aria-label="Toggle menu"
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
			>
				<span />
				<span />
				<span />
			</button>

			<div id="mobile-menu" className={`navbar__mobile ${isOpen ? 'open' : ''}`} role="menu">
				{navLinks.map((item) => (
					<a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
						<span lang="en">{item.label}</span>
						<span lang="id">{item.labelId}</span>
					</a>
				))}
			</div>
		</nav>
	);
}
