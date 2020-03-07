'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Azure Sendgrid SDK helpers.
 */

const C = require('../../config').EMAIL.AZURE_SENDGRID,
    FS = require('fs'),
    P = require('path')

const CLIENT = require('@sendgrid/mail')

CLIENT.setApiKey(C.API_KEY)

module.exports = {
    sendBasicEmail: (to, subject, text) => {

        const email = {
            to: to,
            from: 'test@email.com',
            subject: subject,
            text: text
        }

        CLIENT
            .send(email)
            .then(msg => {console.info(`Basic email sent via Azure and SendGrid! ${JSON.stringify(msg)}`)},
                    err => console.error(`Exception encountered: ${err}!`))
    },
    sendEmailWithAttachment: (to, subject, text) => {

        const attachment = FS.readFileSync(P.join(__dirname, '../', 'data/attachment.png')).toString("base64")

        const email = {
            to: to,
            from: 'test@email.com',
            subject: subject,
            text: text,
            attachments: [{
                content: attachment,
                filename: "attachment.png",
                type: "application/png",
                disposition: "attachment"
            }]
        }

        CLIENT
            .send(email)
            .then(msg => {console.info(`Attachment email sent via Azure and SendGrid! ${JSON.stringify(msg)}`)},
                err => console.error(`Exception encountered: ${err}!`))
    },
    sendBatchEmail: (to, subject, text) => {

        const messages = [{
            to: to,
            from: 'test@email.com',
            subject: subject,
            html: `<h1>${text}#1</h1>`,
        }, {
            to: to,
            from: 'test@email.com',
            subject: subject,
            html: `<h1>${text}#2</h1>`,
        }]

        CLIENT
            .send(messages)
            .then(msg => {console.info(`Batch email sent via Azure and SendGrid! ${JSON.stringify(msg)}`)},
                err => console.error(`Exception encountered: ${err}!`))
    }
}