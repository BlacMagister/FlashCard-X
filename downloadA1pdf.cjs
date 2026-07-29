const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
  
  // Intercept response to save the PDF
  page.on('response', async (response) => {
    if (response.url().includes('Irodori_nyumon_vocab_ID.pdf')) {
      const buffer = await response.buffer();
      fs.writeFileSync('Irodori_nyumon_vocab_ID.pdf', buffer);
      console.log('PDF downloaded successfully!');
    }
  });

  await page.goto('https://www.irodori.jpf.go.jp/assets/data/nyumon/pdf/Irodori_nyumon_vocab_ID.pdf');
  await browser.close();
})();
