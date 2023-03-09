import { loadFromJSON, saveAsJSON } from '@/utils/data';
import { readFullContentObj, restore } from '@/utils/storage';

export const actionSaveFileToDisk = async () => {
	const data = readFullContentObj();

	await saveAsJSON('Mentalist', data.version, data.map);
};

export const actionLoadFileFromDisk = async () => {
	const data = await loadFromJSON();

	restore(data);
};
