require('dotenv').config();
const postingBot = require("./class/postingBot");

(async () => {
    try {
        let bot = new postingBot();
        let post = new repoPost();
        bot.postToGroup();
    } catch (err) {
        console.log(err);
    }
})();

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


