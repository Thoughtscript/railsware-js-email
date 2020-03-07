'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Mailgun SDK helpers.
 */

const C = require('../../config').EMAIL.MAILGUN,
    MG = require('mailgun.js'),
    FS = require('fs'),
    P = require('path')

const CLIENT = MG.client({
    username: 'api',
    key: C.API_KEY,
    public_key: C.PUBLIC_KEY
});

module.exports = {

    sendBasicEmail: async (to, subject, text) => {

        CLIENT.messages.create(C.DOMAIN, {
            from: "test@example.com",
            to: [to],
            subject: subject,
            text: text
        })
            .then(msg => console.info(`Basic email sent via Mailgun ${JSON.stringify(msg)}`))
            .catch(err => console.error(err))
    },

    sendEmailWithAttachment: (to, subject, text) => {

        CLIENT.messages.create(C.DOMAIN, {
            from: "test@example.com",
            to: [to],
            subject: subject,
            html: `<h1>${text}</h1>`,
            attachment: FS.createReadStream(P.join(__dirname, '../', 'data/attachment.png'))
        })
            .then(msg => console.info(`Attachment email sent via Mailgun ${JSON.stringify(msg)}`))
            .catch(err => console.error(err))
    }

}