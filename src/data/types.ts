export interface Profile {
	name: string;
	title: string;
	description: string;
	photo: ImageMetadata;
}

export interface TimelineEntry {
	period: string;
	role: string;
	company: string;
	descriptions: string[];
}

export interface Project {
	title: string;
	detail: string;
	stack: string;
	img: ImageMetadata;
	github?: string;
	live?: string;
}

export interface Certificate {
	name: string;
	photo: ImageMetadata | ImageMetadata[];
}

export interface SocialLink {
	href: string;
	label: string;
}
