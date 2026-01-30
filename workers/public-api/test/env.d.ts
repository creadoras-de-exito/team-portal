// declare module 'cloudflare:test' {
// 	interface ProvidedEnv extends Env {}
// }

declare module 'cloudflare:test' {
	type ProvidedEnv = Env;
}
