import type { SocialLink } from './types';

export interface NavItem {
	label: string;
	labelId: string;
	href: string;
}

export interface SocialIcon extends SocialLink {
	icon: string;
}

export const heroSocials: SocialIcon[] = [
	{ href: 'https://wa.me/6285866638153', label: 'WhatsApp', icon: '/whatsapp.svg' },
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
	{ label: 'Home', labelId: 'Beranda', href: '#home' },
	{ label: 'Services', labelId: 'Layanan', href: '#services' },
	{ label: 'Organization', labelId: 'Organisasi', href: '#organization' },
	{ label: 'Experience', labelId: 'Pengalaman', href: '#experience' },
	{ label: 'Tech Stack', labelId: 'Tech Stack', href: '#techstack' },
	{ label: 'Project', labelId: 'Proyek', href: '#project' },
	{ label: 'Certificate', labelId: 'Sertifikat', href: '#certif' },
	{ label: 'Contact', labelId: 'Kontak', href: '#contact' }
];
