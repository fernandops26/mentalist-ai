'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { AvailableModel, isAvailableModel } from '../constants/openai';
import { getLocalConfigKey, saveLocalConfigKey } from '../storage';

export interface OpenAIConfigurationContextValue {
	updateToken: (token: string) => void;
	token: string | null;

	model: AvailableModel;
	updateModel: (model: AvailableModel) => void;
}

const OpenAIConfigurationContext = createContext<OpenAIConfigurationContextValue>({
	updateToken: () => {},
	token: null,

	model: 'text-davinci-003',
	updateModel: () => {},
});

interface OpenAIConfigurationProviderProps {
	children: React.ReactNode;
}

export const OpenAIConfigurationProvider = ({ children }: OpenAIConfigurationProviderProps) => {
	// ?: We store this as a variable so we can use our type guard to infer the correct type
	// ?: for usage with `useState`

	const [token, setToken] = useState('');
	const [model, setModel] = useState<AvailableModel>('text-davinci-003');

	useEffect(() => {
		const openAIKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? getLocalConfigKey('openAI') ?? '';
		setToken(openAIKey);

		const defaultModel = getLocalConfigKey('model') ?? process.env.NEXT_PUBLIC_OPENAI_COMPLETION_MODEL!;
		const model = isAvailableModel(defaultModel) ? defaultModel : 'text-davinci-003';
		setModel(model);
	}, []);

	const onUpdateToken = useCallback((token: string) => {
		setToken(token);
		saveLocalConfigKey('openAI', token);
	}, []);

	const onUpdateModel = useCallback((model: AvailableModel) => {
		setModel(model);
		saveLocalConfigKey('model', model);
	}, []);

	const value = {
		updateToken: onUpdateToken,
		token,

		model,
		updateModel: onUpdateModel,
	};

	return <OpenAIConfigurationContext.Provider value={value}>{children}</OpenAIConfigurationContext.Provider>;
};

export const useOpenAIConfiguration = () => {
	return useContext(OpenAIConfigurationContext);
};
