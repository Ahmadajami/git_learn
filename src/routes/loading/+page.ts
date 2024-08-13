import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		loading: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	};
};
