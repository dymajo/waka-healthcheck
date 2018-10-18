const AWS = require('aws-sdk')

class Upload {
    constructor() {
        this.s3 = new AWS.S3()
    }
    upload(bucket, key, content, contentType) {
        return new Promise((resolve, reject) => {
            const params = {
                Bucket: bucket,
                Key: key,
                Body: content,
                ContentType: contentType,
            }
            this.s3.putObject(params, function(err, data) {
                if (err) {
                    return reject(err)
                }
                resolve(data)
            })
        })
    }
}
module.exports = Upload
