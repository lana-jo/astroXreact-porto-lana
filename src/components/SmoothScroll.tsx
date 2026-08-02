import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
	return (
		<ReactLenis root options={{ duration: 1.2, smoothWheel: true, anchors: true }}>
			{children}
		</ReactLenis>
	);
}
