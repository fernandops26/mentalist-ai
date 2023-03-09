'use client';
import { Button } from '../ui/Button';

export default function TryItButton() {
	const goToMap = () => {
		window.open('/map', '_self');
	};

	return (
		<Button variant='link' onClick={goToMap}>
			Try It!
		</Button>
	);
}
