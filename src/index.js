const facebookBot = require("./class/facebookBot");
const repoPost = require("./class/repoPost");
(async () => {
    try {
        /*
              const posts= new repoPost();
              console.log(posts.getNewPost()); */
        console.log(process.env.LOGIN_FB);
        let bot = new facebookBot(process.env.LOGIN_FB, process.env.PASSWORD_FB);
        await bot.init();
        await bot.postToGroup(process.env.GROUP_URL, {
            id: 4,
            link: "https://github.com/bradtraversy/design-resources-for-developers",
            author: "bradtraversy",
            about: "zdadazdazd"
        })
    } catch (err) {
        console.log(err);
    }
})();

/*


                    await page.waitFor(4000);

                    await page.click(`[aria-label="What's on your mind?"]`);
                }
            }
        }
*/


