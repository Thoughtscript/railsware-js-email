'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * AWS SES SDK helpers.
 */

const C = require('../../config').EMAIL.AWS_SES,
    CLIENT = new require('aws-sdk/clients/ses')()

module.exports = {
    sendMail: (to, subject, text) => {

        const params = {
            Destination: {
                ToAddresses: [to]
            },
            Message: {
                Body: {
                    Text: {
                        Charset: "UTF-8",
                        Data: text
                    }
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: subject
                }
            },
            Source: "text@example.com",
        }

        CLIENT.sendEmail(params, (err, data) => {
            if (err) return console.error(`Exception encountered: ${err}!`)
            console.info(data)
        })
    }

}