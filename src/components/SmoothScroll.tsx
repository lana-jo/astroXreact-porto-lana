import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';
import { useRef, useEffect } from 'react';

declare global {
	interface Window {
		lenis?: { scrollTo: Function; scroll: number; on: Function; off: Function };
	}
}

interface Props {
	children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
	const ref = useRef<any>(null);

	useEffect(() => {
		let timer: ReturnType<typeof setInterval>;
		const poll = () => {
			const lenis = ref.current?.lenis;
			if (lenis && typeof lenis.scrollTo === 'function') {
				window.lenis = lenis;
				clearInterval(timer);
			}
		};
		timer = setInterval(poll, 50);
		poll();
		return () => {
			clearInterval(timer);
			window.lenis = undefined;
		};
	}, []);

	return (
		<ReactLenis ref={ref} root options={{ duration: 1.2, smoothWheel: true, anchors: true }}>
			{children}
		</ReactLenis>
	);
}
