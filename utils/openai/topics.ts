import { AvailableModel } from '../constants/openai';
import { getClient } from './client';

const CHAT_GPT_MODEL: AvailableModel = 'gpt-3.5-turbo';

interface GenerateContentIdeasProps {
	topic: string;
	context: Array<string>;
	token: string;
	model: AvailableModel;
	accurateFor: string;
	type: string;
}

export const generateContentIdeas = async ({
	topic,
	context,
	token,
	model = 'text-davinci-003',
	accurateFor,
	type,
}: GenerateContentIdeasProps) => {
	let prompt = `Generate 3 items of ${type} for ${accurateFor} of topic "${topic}" in the context of subtopics "${context.join(
		' > ',
	)}". Format them as list.`;

	console.log({ prompt });

	let ideaString = '';

	if (model === CHAT_GPT_MODEL) {
		const completion = await getClient(token).createChatCompletion({
			model,
			messages: [
				{
					role: 'user',
					content: prompt,
				},
			],
			max_tokens: 180,
			temperature: 0.5,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});

		ideaString = completion.data.choices[0].message?.content ?? '';
	} else {
		const completion = await getClient(token).createCompletion({
			model,
			prompt,
			max_tokens: 180,
			temperature: 0.5,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});

		ideaString = completion.data.choices[0].text ?? '';
	}

	const ideas = ideaString
		.trim()
		.split('\n')
		.map((item: string) =>
			item
				.trim()
				.replace(/^\d+\. /, '')
				.replace(/'/g, '')
				.replace(/"/g, ''),
		)
		.filter((idea: string) => idea.trim().length !== 0);

	return ideas;
};
