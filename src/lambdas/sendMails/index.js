
var AWSS3 = require('aws-sdk/clients/s3');
var s3 = new AWSS3();
const email = require("./send");
const makeEmail = require("./makeEmail");

exports.handler = async (event) => {
    try {
        // get clients and videos from S3 and parse them to json.
        const clientsBuffer = await s3.getObject({
            Bucket: 'music-newsletter2021',
            Key: 'videos.json'
        }).promise();
        const clientsString = clientsBuffer.Body.toString();
        const clients = JSON.parse(clientsString);
        const videosBuffer = await s3.getObject({
            Bucket: 'music-newsletter2021',
            Key: 'videos.json'
        }).promise();
        const videosString = videosBuffer.Body.toString();
        const videos = JSON.parse(videosString);

        for (let index = 0; index < clients.length; index++) {
            await email(clients[i], "This week's track", makeEmail(videos[0]));
        }

        const newsMusicList = videos.shift();
        await s3.putObject({
            Bucket: 'music-newsletter2021',
            Key: 'videos.json',
            Body: JSON.stringify(newsMusicList),
            ContentType: 'application/json'
        }).promise();

        const response = {
            statusCode: 200,
            body: JSON.stringify('E-mails Sent!'),
        };
        console.info(response);
        return response;
    } catch (e) {
        console.error(e);
    }
};
