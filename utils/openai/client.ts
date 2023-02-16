import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export default new OpenAIApi(configuration);

export const getClient = (token: string) => {
  const config = new Configuration({
    apiKey: token,
  });

  return new OpenAIApi(config);
};
