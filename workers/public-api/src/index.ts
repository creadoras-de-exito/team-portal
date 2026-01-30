/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { handleJoinIntent } from './handlers/joinIntent';
import withCors from './utils/corsWrapper';

export default {
	async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		const pathname = url.pathname.replace(/\/+$/, ''); // Remove trailing slashes

		console.log('Incoming request', {
			method: request.method,
			url: request.url,
		});

		if (request.method === 'OPTIONS') {
			return withCors(new Response(null, { status: 204 }));
		}

		if (pathname === '/join-intent') {
			return withCors(await handleJoinIntent(request, env));
		}
		return withCors(new Response('Not Found', { status: 404 }));
	},
} satisfies ExportedHandler<Env>;
