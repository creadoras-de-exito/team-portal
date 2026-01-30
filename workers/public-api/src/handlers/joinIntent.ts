import { createClient } from '@supabase/supabase-js';
// import type { Env } from '../../types/Env';
import type { JoinIntentPayload } from '../../types/joinIntent';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export async function handleJoinIntent(request: Request, env: Env): Promise<Response> {
	if (request.method !== 'POST') {
		return new Response('Method Not Allowed', { status: 405 });
	}

	if (!request.headers.get('content-type')?.includes('application/json')) {
		return new Response('Expected JSON', { status: 415 });
	}

	try {
		const body = (await request.json().catch((err) => {
			console.error('Invalid JSON', err);
			throw new Error('Invalid JSON');
		})) as JoinIntentPayload;
		const { email, path } = body;

		console.log('Received payload:', body);

		if (!path) {
			return new Response('Path is required', { status: 400 });
		}

		const validPaths = ['explore', 'community', 'build', 'gifts'] as const;

		if (!validPaths.includes(path)) {
			return new Response('Invalid path', { status: 400 });
		}

		const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

		const { data, error } = await supabase.from('user_paths').insert([{ email, path }]);

		if (error) {
			console.error('Supabase insert error:', error);
			return new Response('Internal Server Error', { status: 500 });
		}

		console.log('Successfully inserted join intent:', data);

		return new Response(JSON.stringify({ message: 'Join intent recorded' }), {
			status: 201,
			headers: { 'Content-type': 'application/json', ...corsHeaders },
		});
	} catch (err: unknown) {
		console.error('Error processing request:', err);
		return new Response('Internal Server Error', { status: 500, headers: { 'Content-type': 'application/json', ...corsHeaders } });
	}
}
