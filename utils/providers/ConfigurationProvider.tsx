'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { SELECTION_MODE, AvailableModes, isAvailableMode } from '../constants/modes';
import { AvailableModel, isAvailableModel } from '../constants/openai';
import { getLocalConfigKey, saveLocalConfigKey } from '../storage';

export interface ConfigurationContextValue {
	updateToken: (token: string) => void;
	token: string;
	mode: AvailableModes | undefined;

	model: AvailableModel;
	updateModel: (model: AvailableModel) => void;
	updateMode: (mode: AvailableModes) => void;
}

const ConfigurationContext = createContext<ConfigurationContextValue>({
	updateToken: () => {},
	token: '',
	mode: undefined,

	model: 'text-davinci-003',
	updateModel: () => {},
	updateMode: () => {},
});

interface ConfigurationProviderProps {
	children: React.ReactNode;
}

export const ConfigurationProvider = ({ children }: ConfigurationProviderProps) => {
	const [token, setToken] = useState<string>('');
	const [model, setModel] = useState<AvailableModel>('text-davinci-003');
	const [mode, setMode] = useState<AvailableModes | undefined>();

	useEffect(() => {
		const defaultMode = getLocalConfigKey('mode') ?? SELECTION_MODE;
		setMode(isAvailableMode(defaultMode) ? defaultMode : SELECTION_MODE);

		const defaultModel = getLocalConfigKey('model') ?? process.env.NEXT_PUBLIC_OPENAI_COMPLETION_MODEL!;

		const model = isAvailableModel(defaultModel) ? defaultModel : 'text-davinci-003';

		setModel(model);

		const defaultToken = getLocalConfigKey('openAI')! ?? process.env.NEXT_PUBLIC_OPENAI_API_KEY!;
		setToken(defaultToken);
	}, []);

	const onUpdateToken = useCallback((token: string) => {
		setToken(token);
		saveLocalConfigKey('openAI', token);
	}, []);

	const onUpdateModel = useCallback((model: AvailableModel) => {
		setModel(model);
		saveLocalConfigKey('model', model);
	}, []);

	const onUpdateMode = useCallback((mode: AvailableModes) => {
		setMode(mode);
		saveLocalConfigKey('mode', mode);
	}, []);

	const value = {
		updateToken: onUpdateToken,
		token,
		mode,

		model,
		updateModel: onUpdateModel,
		updateMode: onUpdateMode,
	};

	return <ConfigurationContext.Provider value={value}>{children}</ConfigurationContext.Provider>;
};

export const useConfiguration = () => {
	return useContext(ConfigurationContext);
};
