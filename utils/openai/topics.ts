import client, { getClient } from './client';

interface GenerateContentIdeasProps {
  topic: string;
  context: Array<string>;
  token: string;
  accurateFor: string;
  type: string;
}
export const generateContentIdeas = async ({
  topic,
  context,
  token,
  accurateFor,
  type,
}: GenerateContentIdeasProps) => {
  let prompt = `Generate 3 full ${type} for ${accurateFor} of topic "${topic}" in the context of subtopics "${context.join(
    ' > '
  )}". Format them as list.`;

  console.log({ prompt });

  const completion = await getClient(token).createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 180,
    temperature: 0.5,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const ideasOnString = completion.data.choices[0].text as any;
  let ideas = ideasOnString
    .trim()
    .split('\n')
    .map((item: string) =>
      item
        .trim()
        .replace(/^\d+\. /, '')
        .replace(/'/g, '')
        .replace(/"/g, '')
    )
    .filter((idea: string) => idea.trim().length !== 0);

  return ideas;
};
