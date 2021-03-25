
var AWSS3 = require('aws-sdk/clients/s3');
var s3 = new AWSS3();
exports.handler = async (event) => {
    try {
        const getParams = {
            Bucket: 'music-newsletter2021',
            Key: 'mails.json'
        };

        const listBuffer = await s3.getObject({
            ...getParams,
        }).promise();
        const listString = listBuffer.Body.toString();
        const list = JSON.parse(listString);

        const newClient = event.queryStringParameters.email;
        await s3.putObject({
            ...getParams,
            Body: JSON.stringify([...list, newClient]),
            ContentType: 'application/json'
        }).promise();
        const response = {
            statusCode: 200,
            body: JSON.stringify('New e-mail was added to the list!'),
        };
        console.info(response);
        return response;
    } catch (e) {
        console.error(e);
    }
};
