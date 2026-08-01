import type { SocialLink } from './types';

export interface NavItem {
	label: string;
	href: string;
}

export interface SocialIcon extends SocialLink {
	icon: string;
}

export const heroSocials: SocialIcon[] = [
	{ href: 'https://github.com/lana-jo', label: 'GitHub', icon: '/github.svg' },
	{ href: 'https://www.linkedin.com/in/lana-jauhar-75604317a/', label: 'LinkedIn', icon: '/linkedin.svg' },
	{ href: 'mailto:lanajauhar06@gmail.com', label: 'Email Me', icon: '/mail.svg' }
];

export const contactSocials: SocialIcon[] = [
	{ href: 'https://t.me/j0_here', label: 'Telegram', icon: '/telegram.svg' },
	{ href: 'https://wa.me/6285866638153', label: 'WhatsApp', icon: '/whatsapp.svg' },
	{ href: 'https://www.linkedin.com/in/lana-jauhar-75604317a/', label: 'LinkedIn', icon: '/linkedin.svg' },
	{ href: 'mailto:lanajauhar06@gmail.com', label: 'Email Me', icon: '/mail.svg' }
];

export const navLinks: NavItem[] = [
	{ label: 'Home', href: '#home' },
	{ label: 'Organization', href: '#organization' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Tech Stack', href: '#techstack' },
	{ label: 'Project', href: '#project' },
	{ label: 'Certificate', href: '#certif' },
	{ label: 'Contact', href: '#contact' }
];
