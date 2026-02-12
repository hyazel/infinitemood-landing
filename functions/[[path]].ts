interface Env {
    // Add environment variables here if needed
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const url = new URL(context.request.url);
    const lang = url.searchParams.get('lang');

    // Only intervene if lang is 'en' and it's likely a page request
    // (We don't want to slow down assets/API calls)
    if (lang === 'en') {
        const response = await context.next();

        // Ensure we are dealing with HTML
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('text/html')) {
            return new HTMLRewriter()
                .on('meta[property="og:title"]', new MetaRewriter('content', "Ambient music app for focus and escape | Fragmnt"))
                .on('meta[property="og:description"]', new MetaRewriter('content', "Fragmnt is a customizable musical ambiance app. Soundscapes designed to last, composed by real musicians."))
                .on('meta[name="twitter:title"]', new MetaRewriter('content', "Ambient music app for focus and escape | Fragmnt"))
                .on('meta[name="twitter:description"]', new MetaRewriter('content', "Fragmnt is a customizable musical ambiance app. Soundscapes designed to last, composed by real musicians."))
                .transform(response);
        }

        return response;
    }

    // Default behavior (Pass through)
    return context.next();
};

class MetaRewriter {
    attributeName: string;
    value: string;

    constructor(attributeName: string, value: string) {
        this.attributeName = attributeName;
        this.value = value;
    }

    element(element: Element) {
        element.setAttribute(this.attributeName, this.value);
    }
}
