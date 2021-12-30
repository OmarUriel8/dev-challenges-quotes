interface fetchProps {
	endpoint: string;
	method?: string;
	data?: {};
}
export const fetchSinToken = ({ endpoint, method = 'GET', data }: fetchProps) => {
	const url = import.meta.env.VITE_URL_API_QUOTES + endpoint || '';
	// console.log(url);
	if (method === 'GET') {
		return fetch(url.toString());
	} else {
		return fetch(url.toString(), {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	}
};
