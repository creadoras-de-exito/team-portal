export default function withCors(response: Response) {
	const headers = new Headers(response.headers);
	headers.set('Access-Control-Allow-Origin', '*');
	headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
	headers.set('Access-Control-Allow-Headers', 'Content-Type');
	if (!headers.has('Content-Type')) {
		headers.set('Content-Type', 'application/json');
	}

	return new Response(response.body, {
		status: response.status,
		headers,
	});
}
