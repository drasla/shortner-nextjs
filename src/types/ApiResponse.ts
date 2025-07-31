export type ApiActionInput<T> = T extends (input: infer I) => any ? I : never;
export type ApiActionOutput<T> = T extends (...args: any[]) => Promise<infer R> ? R : never;
