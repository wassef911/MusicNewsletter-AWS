const puppeteer = require("puppeteer")

const URL = "https://www.facebook.com/groups/githubscommunity";

const crawlFacebookGroup = async (url) => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto(url);

    const pageName = await page.$eval("m9osqain > div", element => element.innerHTML)
    console.log(pageName);
    await browser.close();
}


crawlFacebookGroup(url)