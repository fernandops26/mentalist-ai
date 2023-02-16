import { useToken } from '../providers/TokenProvider';

const host = '';

export const generateIdeas = async (
  main: string,
  context: Array<string>,
  token: string
) => {
  const res = await fetch('/api/ideas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ main, context, token }),
  });

  const content = await res.json();

  return content.ideas;
};
