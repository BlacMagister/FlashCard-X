const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');
  await page.goto('https://www.irodori.jpf.go.jp/starter/pdf.html');
  const links = await page.$$eval('a', as => as.map(a => a.href));
  const vocabLinks = links.filter(l => l.toLowerCase().includes('vocab') || l.toLowerCase().includes('word') || l.toLowerCase().includes('list'));
  console.log("Found links:", vocabLinks);
  await browser.close();
})();
