require('dotenv').config();
const puppeteer = require("puppeteer");
const URL = "https://www.facebook.com/groups/718972282074159";
const POST = "A BOT POSTED THIS!"


async () => {
    const browser = await puppeteer.launch({
        headless: false, slowMo: 20, ignoreDefaultArgs: ['--disable-extensions'],
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
    /*
    
            for (let j = 0; j < sentenceList.length; j++) {
                let sentence = sentenceList[j];
                for (let i = 0; i < sentence.length; i++) {
                    await page.keyboard.press(sentence[i]);
                    if (i === sentence.length - 1) {
                        await page.waitFor(2000);
                        await page.keyboard.down('Control');
                        await page.keyboard.press(String.fromCharCode(13)); // character code for enter is 13
                        await page.keyboard.up('Control');
                        await page.waitFor(4000);
    
                        console.log('done');
                        await page.click(`[aria-label="What's on your mind?"]`);
                    }
                }
            }
    */


};