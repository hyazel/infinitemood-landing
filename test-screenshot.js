const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    // Disable JS to match user's test
    await page.setJavaScriptEnabled(false);
    await page.goto('http://localhost:4173/project', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'screenshot-nojs.png' });
    await browser.close();
})();
