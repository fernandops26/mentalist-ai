import {
	fileOpen as _fileOpen,
	fileSave as _fileSave,
	FileSystemHandle,
	supported as nativeFileSystemSupported,
} from 'browser-fs-access';
import { MIME_TYPES } from './constants/export';

type FILE_EXTENSION = 'json' | 'mentalist';

export const fileSave = (
	blob: Blob,
	opts: {
		/** supply without the extension */
		name: string;
		/** file extension */
		extension: FILE_EXTENSION;
		description: string;
		/** existing FileSystemHandle */
		fileHandle?: FileSystemHandle | null;
	},
) => {
	return _fileSave(
		blob,
		{
			fileName: `${opts.name}.${opts.extension}`,
			description: opts.description,
			extensions: [`.${opts.extension}`],
		},
		// opts.fileHandle
	);
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

export type { FileSystemHandle };
export { nativeFileSystemSupported };
