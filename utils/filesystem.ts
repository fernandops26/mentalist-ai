import {
	fileOpen as _fileOpen,
	fileSave as _fileSave,
	supported as nativeFileSystemSupported,
} from 'browser-fs-access';
import { MIME_TYPES } from './constants/export';

type FILE_EXTENSION = 'json' | 'mentalist';

export const fileSave = (
	blob: Blob,
	opts: {
		/** name without the extension */
		name: string;
		extension: FILE_EXTENSION;
		description: string;
	},
) => {
	return _fileSave(blob, {
		fileName: `${opts.name}.${opts.extension}`,
		description: opts.description,
		extensions: [`.${opts.extension}`],
	});
};

export const fileOpen = <M extends boolean | undefined = false>(opts: {
	extensions?: FILE_EXTENSION[];
	description: string;
	multiple?: M;
}): Promise<M extends false | undefined ? File : File[]> => {
	type RetType = M extends false | undefined ? File : File[];

	const mimeTypes = opts.extensions?.reduce((mimeTypes, type) => {
		mimeTypes.push(MIME_TYPES[type]);

		return mimeTypes;
	}, [] as string[]);

	const extensions = opts.extensions?.reduce((acc, ext) => {
		return acc.concat(`.${ext}`);
	}, [] as string[]);

	return _fileOpen({
		description: opts.description,
		extensions,
		mimeTypes,
		multiple: opts.multiple ?? false,
	}) as Promise<RetType>;
};

export { nativeFileSystemSupported };
