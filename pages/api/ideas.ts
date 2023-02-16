// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateContentIdeas } from '@/utils/openai/topics';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  ideas: Array<any>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { main = '', context = [], token = '' } = req.body;

  if (!main) {
    return res.status(200).json({ ideas: [] });
  }

  const ideas = await generateContentIdeas({ topic: main, context, token });

  res.status(200).json({ ideas });
}
