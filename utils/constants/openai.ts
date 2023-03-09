export const AVAILABLE_MODELS = ['text-davinci-003', 'gpt-3.5-turbo'] as const;

export type AvailableModel = (typeof AVAILABLE_MODELS)[number];

export const isAvailableModel = (model: string): model is AvailableModel => {
	return AVAILABLE_MODELS.includes(model as AvailableModel);
};
