import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}

	return (
		<ReactLenis root options={{ duration: 1.2, smoothWheel: true, anchors: true }}>
			{children}
		</ReactLenis>
	);
}
