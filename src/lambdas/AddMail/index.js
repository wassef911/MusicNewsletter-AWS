
var AWSS3 = require('aws-sdk/clients/s3');
var s3 = new AWSS3();

//construct getParam
var getParams = {
    Bucket: 'music-newsletter2021',
    Key: 'mails.json'
};

(async () => {
    try {
        await s3.putObject({
            Bucket: 'music-newsletter2021',
            Key: 'mails.json',
            Body: JSON.stringify({ test: "hahahaha" }),
            ContentType: 'application/json'
        }).promise();
    } catch (e) {
        console.log(e);
    }
})();
