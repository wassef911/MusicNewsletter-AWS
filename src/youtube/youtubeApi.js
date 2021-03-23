var { google } = require('googleapis');

const fetchPlaylistNames = async (link = "https://www.youtube.com/playlist?list=PLpbljP19_dnTHcREyYBgWnz-g_IFlPTZ8") => {
    try {
        const playlistId = link.slice(link.indexOf("=") + 1);
        const service = google.youtube('v3');
        const res = await service.playlistItems.list({
            key: process.env.YOUTUBE_KEY,
            part: [
                "snippet"
            ],
            playlistId
        });
        return res.data.items.map((item) => item.snippet["title"]);
    } catch (err) {
        console.log(err);
    }
}

const fetchVideoId = async (name) => {
    try {
        const service = google.youtube('v3');
        const res = await service.search.list({
            key: process.env.YOUTUBE_KEY,
            part: [
                "snippet"
            ],
            maxResults: 1,
            q: name
        })
        return res.data.items[0].id.videoId;
    } catch (err) {
        console.log(err);
    }
}

const fetchVideosEmbed = async (idList) => {
    try {
        const service = google.youtube('v3');
        const res = await service.videos.list({
            key: process.env.YOUTUBE_KEY,
            part: [
                "player"
            ],
            id: [...idList]
        });
        return res.data.items.map((item) => item.player.embedHtml);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { fetchPlaylistNames, fetchVideoId, fetchVideosEmbed };