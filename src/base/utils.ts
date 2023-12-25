import moment from "moment";

/**
 * generate hash from password or string
 * @param {string} password
 * @returns {string}
 */
export function generateHash(password: string): string {
	return Bun.password.hashSync(password);
}

/**
 * validate text with hash
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
export function validateHash(
	password: string | undefined,
	hash: string | undefined | null,
): Promise<boolean> {
	if (!password || !hash) {
		return Promise.resolve(false);
	}

	return Bun.password.verify(password, hash);
}

export const formatDate = (date: Date | string , format?: string) => moment(date).format(format ?? 'DD/MM/YYYY')
