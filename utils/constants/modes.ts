export const SELECTION_MODE = 'selection';
export const AI_MODE = 'ai';

export const AVAILABLE_MODES = [SELECTION_MODE, AI_MODE] as const;

export type AvailableModes = (typeof AVAILABLE_MODES)[number];

export const isAvailableMode = (mode: string): mode is AvailableModes => {
	return AVAILABLE_MODES.includes(mode as AvailableModes);
};
