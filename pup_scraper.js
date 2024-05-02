const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=AI+nature&btnG=');
  await page.waitForSelector("h3");
  await page.content();
  await browser.close();
})();