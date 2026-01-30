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

import { createClient } from '@supabase/supabase-js';

interface Env {
	SUPABASE_URL: string;
	SUPABASE_SERVICE_ROLE_KEY: string;
}

type JoinIntentPayload = {
	email?: string | null;
	path: 'explore' | 'community' | 'build' | 'gifts';
};

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}

		if (request.method !== 'POST') {
			return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
		}

		if (!request.headers.get('content-type')?.includes('application/json')) {
			return new Response('Expected JSON', { status: 415, headers: corsHeaders });
		}

		// console.log('Request received:', request);
		// console.log('env.SUPABASE_URL:', env.SUPABASE_URL ? 'present' : 'missing');
		// console.log('env.SUPABASE_SERVICE_ROLE_KEY:', env.SUPABASE_SERVICE_ROLE_KEY ? 'present' : 'missing');

		console.log('Incoming request', {
			method: request.method,
			url: request.url,
		});

		try {
			const body = (await request.json().catch((err) => {
				console.error('Invalid JSON', err);
				throw new Error('Invalid JSON');
			})) as JoinIntentPayload;
			// const body = (await request.json()) as JoinIntentPayload;
			const { email, path } = body;

			console.log('Received payload:', body);

			if (!path) {
				return new Response('Path is required', { status: 400, headers: corsHeaders });
			}

			const validPaths = ['explore', 'community', 'build', 'gifts'] as const;

			if (!validPaths.includes(path)) {
				return new Response('Invalid path', { status: 400, headers: corsHeaders });
			}

			const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

			const { error } = await supabase.from('user_paths').insert([{ email, path }]);

			if (error) throw error;

			return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json', ...corsHeaders } });
		} catch (error: unknown) {
			console.error('Worker error:', error);
			return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json', ...corsHeaders },
			});
		}
	},
} satisfies ExportedHandler<Env>;
