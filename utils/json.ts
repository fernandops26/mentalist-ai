import { EXPORT_DATA_TYPES } from './constants/export';
import { ImportedDataState } from './types';

export const isValidMentalistData = (data?: { type?: any; version?: any; map?: any }): data is ImportedDataState => {
	return (
		data?.type === EXPORT_DATA_TYPES.mentalist &&
		typeof data.map === 'object' &&
		Array.isArray(data.map.nodes) &&
		Array.isArray(data.map.edges)
	);
};
