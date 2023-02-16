import { useToken } from '../providers/TokenProvider';

const host = '';

interface generateIdeasProps {
  main: string;
  context: Array<string>;
  token: string;
  accurateFor: string;
  type: string;
}

export const generateIdeas = async ({
  main,
  context,
  token,
  accurateFor,
  type,
}: generateIdeasProps) => {
  const res = await fetch('/api/ideas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ main, context, accurateFor, type, token }),
  });

  const content = await res.json();

  return content.ideas;
};
