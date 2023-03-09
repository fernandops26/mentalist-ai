// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AVAILABLE_MODELS, isAvailableModel } from '@/utils/constants/openai';
import { generateContentIdeas } from '@/utils/openai/topics';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	ideas: Array<any>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { main = '', context = [], token = '', model, accurateFor, type } = req.body;

	if (!main) {
		return res.status(200).json({ ideas: [] });
	}

	const ideas = await generateContentIdeas({
		topic: main,
		context,
		token,
		accurateFor,
		type,
		model: isAvailableModel(model) ? model : AVAILABLE_MODELS[0],
	});

	res.status(200).json({ ideas });
}
