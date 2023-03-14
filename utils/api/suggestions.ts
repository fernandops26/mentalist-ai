import { AvailableModel } from '../constants/openai';

const host = '';

interface generateIdeasProps {
	main: string;
	context: Array<string>;
	token: string;
	model: AvailableModel;
	accurateFor: string;
	type: string;
}

export const generateIdeas = async ({ main, context, token, model, accurateFor, type }: generateIdeasProps) => {
	const res = await fetch('/api/ideas', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ main, context, accurateFor, type, token, model }),
	});

	const content = await res.json();

	return content.ideas;
};
