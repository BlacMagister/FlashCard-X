import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
  });
  
  // Set User-Agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
  
  // Download the file
  const response = await page.goto('https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Irodori_A2_2_WordList.pdf', { waitUntil: 'networkidle2' });
  
  const buffer = await response.buffer();
  fs.writeFileSync('irodori_A2_2_puppeteer.pdf', buffer);
  
  console.log("Size:", buffer.length);
  await browser.close();
})();
