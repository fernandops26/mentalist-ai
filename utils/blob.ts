import { MIME_TYPES } from './constants/export';
import { isValidMentalistData } from './json';

export const loadFromBlob = async (blob: Blob) => {
	const resolved = await loadDataFromBlob(blob);

	if (resolved.type !== MIME_TYPES.mentalist) {
		throw new Error("Couldn't load mentalist file");
	}

	return resolved.data;
};

const parseFileContents = async (blob: Blob | File) => {
	let contents: string = await new Promise((resolve) => {
		const reader = new FileReader();
		reader.readAsText(blob, 'utf8');
		reader.onloadend = () => {
			if (reader.readyState === FileReader.DONE) {
				resolve(reader.result as string);
			}
		};
	});

	return contents;
};

export const loadDataFromBlob = async (blob: Blob | File) => {
	const contents = await parseFileContents(blob);
	try {
		const data = JSON.parse(contents);

		if (isValidMentalistData(data)) {
			return {
				type: MIME_TYPES.mentalist,
				data: {
					type: data.type,
					version: data.version,
					map: data.map,
					config: data.config,
				},
			};
		}
		throw new Error('Invalid mentalist file');
	} catch (error: any) {
		console.error(error.message);
		throw new Error("Couldn't parse mentalist file");
	}
};

export type ValueOf<T> = T[keyof T];

export const createFile = (
	blob: File | Blob | ArrayBuffer,
	mimeType: ValueOf<typeof MIME_TYPES>,
	name: string | undefined,
) => {
	return new File([blob], name || '', {
		type: mimeType,
	});
};

export const normalizeFile = async (file: File) => {
	if (!file.type) {
		if (file?.name?.endsWith('.mentalist')) {
			file = createFile(await blobToArrayBuffer(file), MIME_TYPES.mentalist, file.name);
		}
	}

	return file;
};

export const blobToArrayBuffer = (blob: Blob): Promise<ArrayBuffer> => {
	if ('arrayBuffer' in blob) {
		return blob.arrayBuffer();
	}

	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			if (!event.target?.result) {
				return reject(new Error("Couldn't convert blob to ArrayBuffer"));
			}

			resolve(event.target.result as ArrayBuffer);
		};

		reader.readAsArrayBuffer(blob);
	});
};
