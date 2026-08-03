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
	if (typeof window === 'undefined') return 'light';
	return theme === 'system'
		? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		: theme;
}

interface NavbarProps {
	lang?: Lang;
}

export default function Navbar({ lang: initialLang = 'en' }: NavbarProps) {
	const [hidden, setHidden] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [theme, setTheme] = useState<Theme>('system');
	const [lang] = useState<Lang>(initialLang);
	const [showThemeMenu, setShowThemeMenu] = useState(false);
	const [showLangMenu, setShowLangMenu] = useState(false);
	const themeMenuRef = useRef<HTMLDivElement>(null);
	const langMenuRef = useRef<HTMLDivElement>(null);
	const progressRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const applyTheme = (target: Theme) => {
			document.documentElement.setAttribute('data-theme', resolveTheme(target));
		};

		const rawTheme = localStorage.getItem('theme');
		const savedTheme: Theme =
			rawTheme === 'light' || rawTheme === 'dark' || rawTheme === 'system' ? rawTheme : 'system';
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

		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setShowThemeMenu(false);
				setShowLangMenu(false);
				setIsOpen(false);
			}
		};

		mediaQuery.addEventListener('change', handleSystemChange);
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleKeydown);
		window.addEventListener('resize', handleResize);

		return () => {
			mediaQuery.removeEventListener('change', handleSystemChange);
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleKeydown);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		let idleTimer: ReturnType<typeof setTimeout> | undefined;
		// Keep the navbar visible on scroll for users who prefer reduced motion
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrolled(currentScrollY > 10);

			if (isOpen) {
				setHidden(false);
				return;
			}

			if (idleTimer) clearTimeout(idleTimer);

			if (currentScrollY > 100 && !reducedMotion.matches) {
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

	useEffect(() => {
		const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.navbar a[href^="#"]'));
		const sections = navLinks
			.map((item) => document.getElementById(item.href.slice(1)))
			.filter((el): el is HTMLElement => el !== null);

		const update = () => {
			const doc = document.documentElement;
			const max = doc.scrollHeight - window.innerHeight;
			const progress = max > 0 ? window.scrollY / max : 0;
			if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;

			const pos = window.scrollY + window.innerHeight * 0.35;
			let current = sections.length > 0 ? sections[0].id : '';
			for (const section of sections) {
				if (section.offsetTop <= pos) current = section.id;
			}
			if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
				current = sections[sections.length - 1]?.id ?? current;
			}
			links.forEach((link) => {
				const isActive = link.getAttribute('href') === `#${current}`;
				link.classList.toggle('active', isActive);
				if (isActive) {
					link.setAttribute('aria-current', 'true');
				} else {
					link.removeAttribute('aria-current');
				}
			});
		};

		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, []);

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
			<div className="scroll-progress" ref={progressRef} aria-hidden="true" />
			<div className="navbar__inner">
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
							<a href={item.href}>{lang === 'id' ? item.labelId : item.label}</a>
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
			</div>

			<div id="mobile-menu" className={`navbar__mobile ${isOpen ? 'open' : ''}`} role="menu">
				{navLinks.map((item) => (
					<a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
						{lang === 'id' ? item.labelId : item.label}
					</a>
				))}
			</div>
		</nav>
	);
}
