import Top from './Top';

interface AppLayoutProps {
	children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<div>
			<Top />
			<div>{children}</div>
		</div>
	);
}
