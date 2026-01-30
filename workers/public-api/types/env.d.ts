// This extends the global Env interface for Cloudflare Workers
export {};

declare global {
	interface Env {
		SUPABASE_URL: string;
		SUPABASE_SERVICE_ROLE_KEY: string;
	}
}
