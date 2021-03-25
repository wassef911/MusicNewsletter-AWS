const fs = require('fs');
const { fetchPlaylistNames, fetchVideoId, fetchVideosEmbed } = require("./youtubeApi");
const { AsyncLoop } = require("./utils");
(async () => {
    try {
        //const tracks = await fetchPlaylistNames();  commented to avoid exceeding the free quota
        const ids = await AsyncLoop(require("./songslist.json"), fetchVideoId);
        const embeds = fetchVideosEmbed(ids);
        fs.writeFileSync("./videos.json", JSON.stringify(embeds, null, 2));
    } catch (err) {
        console.log(err);
    }
})();


