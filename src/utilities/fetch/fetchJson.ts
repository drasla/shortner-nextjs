export async function fetchJson<T>(
    input: RequestInfo,
    init?: RequestInit
): Promise<T> {
    const res = await fetch(input, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...(init?.headers ?? {}),
        }
    })

    const data = await res.json();

    if (!res.ok) {
        return data as T;
    }
    return data as T;
}