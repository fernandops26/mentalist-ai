'use client';
import { ReactFlowJsonObject } from 'reactflow';
import { initialNodes } from '@/data/defaultNodes';
import { initialEdges } from '@/data/defaultEdges';
import { Config, DataState, ImportedDataState, MapState } from './types';
import { palettes } from '@/data/defaultPalettes';

const KEY = 'mentalist-data';
const TYPE = 'mentalist';
const VERSION = 1;

export const saveMap = (obj: ReactFlowJsonObject) => {
	saveProjectKey('map', formatMap(obj) as MapState);
};

export const saveProjectKey = (key: keyof DataState, value: any) => {
	const data = readFullContentObj();

	data[key] = value;

	localStorage.setItem(KEY, JSON.stringify(data));
};

export const loadMapData = (): ReactFlowJsonObject => {
	const data = typeof window !== 'undefined' && localStorage.getItem(KEY);

	if (!data) {
		return {
			nodes: initialNodes,
			edges: initialEdges,
			viewport: {
				x: 0,
				y: 0,
				zoom: 1,
			},
		};
	}

	const jsonObj = JSON.parse(data);

	if (Array.isArray(jsonObj) || !Object.hasOwn(jsonObj, 'type')) {
		// old version
		return jsonObj[0] as ReactFlowJsonObject;
	}

	return jsonObj.map as ReactFlowJsonObject;
};

export const readFullContentObj = (): DataState => {
	const data = typeof window !== 'undefined' && localStorage.getItem(KEY);

	const jsonData = JSON.parse(data as any);

	return formatObject(jsonData);
};

const formatObject = (data: any) => {
	return {
		type: data?.type || TYPE,
		version: data?.version || VERSION,
		map: data?.map || {
			nodes: [],
			edges: [],
			viewport: {
				x: 0,
				y: 0,
				zoom: 1,
			},
		},
		config: data?.config
			? data?.config
			: {
					palette: palettes[0].id,
			  },
	};
};

const formatMap = (obj: ReactFlowJsonObject) => {
	return {
		nodes: obj.nodes,
		edges: obj.edges,
		viewport: obj.viewport,
	};
};

export const updateConfig = (key: string, value: any) => {
	const data = readFullContentObj();

	data.config = {
		...data.config,
		[key]: value,
	};

	saveProjectKey('config', data.config);
};

export const getConfigKey = (key: keyof Config): any => {
	const data = readFullContentObj();

	return data.config ? data.config[key] : null;
};

export const restoreProject = (dataState: ImportedDataState) => {
	localStorage.setItem(KEY, JSON.stringify(dataState));
};

const obj = {
	openAI: 'mentalist-openai-key',
	model: 'mentalist-model',
	mode: 'mentalist-mode',
};

export const saveLocalConfigKey = (key: keyof typeof obj, value: string): void => {
	const keyToUse: string = obj[key];

	localStorage.setItem(keyToUse, value);
};

export const getLocalConfigKey = (key: keyof typeof obj) => {
	const keyToUse: string = obj[key];

	return localStorage.getItem(keyToUse);
};
