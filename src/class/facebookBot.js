const puppeteer = require("puppeteer");

const URL = "https://www.facebook.com/groups/718972282074159";
const POST = "A BOT POSTED THIS!";

class facebookBot {
    constructor(login, password) {
        this.password = password;
        this.login = login;
    }
    async init() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto("https://www.facebook.com/");
        await page.waitForSelector("#email");
        await page.type("#email", this.login);
        await page.type("#pass", this.password);
        await page.click("button:first-of-type");
    }
    async postToGroup(url, post) {
        page = await browser.currentPage();
        await page.goto(url);
        await page.type(`[aria-label="What's on your mind?"]`, post.about);
    }

}



module.exports = facebookBot;