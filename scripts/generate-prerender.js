import { preview } from 'vite';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
    // Start the Vite preview server programmatically
    const server = await preview({ preview: { port: 4173 } });

    // Launch headless browser
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const routes = [
        '/',
        '/demo',
        '/exploration',
        '/project',
        '/follow',
        '/blog',
        '/blog/lancement-site'
    ];

    for (const route of routes) {
        console.log(`Prerendering ${route}...`);

        // Expose a flag to the window so React knows it is being prerendered
        await page.evaluateOnNewDocument(() => {
            window.__PRERENDER_INJECTED = true;
        });

        // Navigate to the route and wait for no more network connections (implies JS has finished rendering)
        await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle0', timeout: 30000 });

        // Get the fully rendered HTML
        const html = await page.content();

        // Save to the dist folder (mirroring the required structure)
        const filePath = path.join(process.cwd(), 'dist', route === '/' ? 'index.html' : `${route}/index.html`);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, html);
        console.log(`Saved ${filePath}`);
    }

    await browser.close();
    server.httpServer.close();
    console.log('Prerendering complete!');
    process.exit(0);
})().catch((err) => {
    console.error("Error during prerendering:", err);
    process.exit(1);
});
