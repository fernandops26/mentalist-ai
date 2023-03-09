export const nextId = (): string => {
	return crypto.randomUUID().toString();
};
