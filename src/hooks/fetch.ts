import { useState } from 'react';

export function useFetchPostJSON(url: string, data?: {}) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const post = async () => {
		try {
			setIsLoading(true);
			setIsError(false);
			// Default options are marked with *
			const response = await fetch(url, {
				method: 'POST', // *GET, POST, PUT, DELETE, etc.
				mode: 'cors', // no-cors, *cors, same-origin
				cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				credentials: 'same-origin', // include, *same-origin, omit
				headers: {
					'Content-Type': 'application/json',
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				redirect: 'follow', // manual, *follow, error
				referrerPolicy: 'no-referrer', // no-referrer, *client
				body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
			});

			if (response.status !== 200) {
				setIsLoading(false);
				setIsError(true);
				return;
			}

			const jsonResponse = await response.json(); // parses JSON response into native JavaScript objects
			setIsLoading(false);
			return jsonResponse;
		} catch (err) {
			setIsError(true);
			return;
		}
	};

	return {
		isError,
		isLoading,
		post,
	};
}
