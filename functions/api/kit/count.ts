interface Env {
    KIT_API_SECRET: string;
}

// Minimal type definition for Cloudflare Pages Function
// to avoid needing @cloudflare/workers-types in the main project
type PagesFunction<Env = unknown> = (
    context: {
        request: Request;
        env: Env;
        waitUntil: (promise: Promise<unknown>) => void;
        next: () => Promise<Response>;
        data: Record<string, unknown>;
    }
) => Promise<Response>;

export const onRequest: PagesFunction<Env> = async (context) => {
    const KIT_API_SECRET = context.env.KIT_API_SECRET;

    if (!KIT_API_SECRET) {
        return new Response(JSON.stringify({ error: 'Missing API Secret' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const response = await fetch('https://api.convertkit.com/v4/account', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-Kit-Api-Secret': KIT_API_SECRET,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Kit API Error:', errorText);
            return new Response(JSON.stringify({ error: 'Failed to fetch from Kit' }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = (await response.json()) as { account: { total_subscribers: number } };

        // Fallback if structure changes, but V4 usually returns account object
        const count = data?.account?.total_subscribers || 0;

        return new Response(JSON.stringify({ count }), {
            headers: {
                'Content-Type': 'application/json',
                // Cache for 1 hour to avoid rate limits
                'Cache-Control': 'public, max-age=3600',
            },
        });

    } catch (err) {
        console.error('Network/Server Error:', err);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
