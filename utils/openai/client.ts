import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const getClient = (token: string) => {
	const config = new Configuration({
		apiKey: token,
	});

	return new OpenAIApi(config);
};

const OPEN_AI_API = new OpenAIApi(configuration);

export default OPEN_AI_API;
