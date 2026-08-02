export interface Profile {
	name: string;
	title: string;
	titleId: string;
	description: string;
	descriptionId: string;
	photo: ImageMetadata;
}

export interface TimelineEntry {
	period: string;
	periodId: string;
	role: string;
	roleId: string;
	company: string;
	companyId?: string;
	descriptions: string[];
	descriptionsId: string[];
}

export interface Project {
	title: string;
	titleId: string;
	detail: string;
	detailId: string;
	stack: string;
	img: ImageMetadata;
	github?: string;
}

export interface Certificate {
	name: string;
	photo: ImageMetadata | ImageMetadata[];
}

export interface SocialLink {
	href: string;
	label: string;
}

export interface Service {
	title: string;
	titleId: string;
	description: string;
	descriptionId: string;
	icon: string;
	tags: string[];
}
