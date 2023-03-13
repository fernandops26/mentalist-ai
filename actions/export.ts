import { palettes } from '@/data/defaultPalettes';
import { loadFromJSON, saveAsJSON } from '@/utils/data';
import { readFullContentObj, restoreProject, updateConfig } from '@/utils/storage';

export const actionSaveFileToDisk = async () => {
	const data = readFullContentObj();

	await saveAsJSON('Mentalist', data.version, data.map, data.config);
};

export const actionLoadFileFromDisk = async () => {
	try {
		const data = await loadFromJSON();

		if (data.config?.palette == null) {
			data.config = {
				...data.config,
				palette: palettes[0].id,
			};
		}

		restoreProject(data);

		return true;
	} catch (error) {
		console.error(error);
	}

	return false;
};
