import { ReactFlowJsonObject } from 'reactflow';
import { loadFromBlob, normalizeFile } from './blob';
import { EXPORT_DATA_TYPES, MIME_TYPES } from './constants/export';
import { fileOpen, fileSave } from './filesystem';
import { ExportedDataState } from './types';

export const serializeAsJSON = (map: ReactFlowJsonObject, version: string): string => {
	const data: ExportedDataState = {
		type: EXPORT_DATA_TYPES.mentalist,
		version,
		map,
	};

	return JSON.stringify(data, null, 2);
};

export const saveAsJSON = async (name: string, version: string, map: ReactFlowJsonObject) => {
	const serialized = serializeAsJSON(map, version);
	const blob = new Blob([serialized], {
		type: MIME_TYPES.mentalist,
	});

	const fileHandle = await fileSave(blob, {
		name,
		extension: 'mentalist',
		description: 'Mentalist AI file',
	});

	return { fileHandle };
};

export const loadFromJSON = async () => {
	const file = await fileOpen({
		description: 'Mentalist AI files',
	});

	return loadFromBlob(await normalizeFile(file));
};
