'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Mandrill SDK helpers.
 */

const M = require('mandrill-api/mandrill'),
    C = require('../../config').EMAIL.MANDIRLL,
    FS = require('fs'),
    P = require('path')

const CLIENT = new M.Mandrill(C.API_KEY)

module.exports = {

    sendBasicEmail: (to, from, subject, text) => {
        const message = {
            "text": text,
            "subject": subject,
            "from_email": from,
            "to": [{
                "email": to,
                "type": "to"
            }]
        }

        CLIENT.messages.send({
                "message": message,
                "async": false,
                "ip_pool": "Main Pool",
                "send_at": new Date()
            },
            result => console.info(`Basic email sent via Mandrill ${JSON.stringify(result)}`),
            e => console.error(`Exception encountered: ${e}!`))
    },

    sendEmailWithAttachment: (to, from, subject, text) => {
        const message = {
            "text": `${text} \n\n ${JSON.stringify(FS.createReadStream(P.join(__dirname, '../', 'data/attachment.png')).toString("base64"))}`,
            "subject": subject,
            "from_email": from,
            "to": [{
                "email": to,
                "type": "to"
            }],
            "attachments": [
                {
                    "type": "image/png",
                    "name": "attachment.png",
                    "content": FS.createReadStream(P.join(__dirname, '../', 'data/attachment.png')).toString("base64")
                }
            ]
        }

        CLIENT.messages.send({
                "message": message,
                "async": false,
                "ip_pool": "Main Pool",
                "send_at": new Date()
            },
            result => console.info(`Attachment email sent via Mandrill ${JSON.stringify(result)}`),
            e => console.error(`Exception encountered: ${e}!`))

    },

    sendBatchEmail: (to, from, subject, text) => {
        const message = {
            "text": text,
            "subject": subject,
            "from_email": from,
            "to": [{
                "email": to.FIRST,
                "type": "to"
            }, {
                "email": to.SECOND,
                "type": "to"
            }]
        }

        CLIENT.messages.send({
                "message": message,
                "async": false,
                "ip_pool": "Main Pool",
                "send_at": new Date()
            },
            result => console.info(`Batch email sent via Mandrill ${JSON.stringify(result)}`),
            e => console.error(`Exception encountered: ${e}!`))

    }

}