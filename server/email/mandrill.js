'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Mandrill SDK helpers.
 */

const M = require('mandrill-api/mandrill'),
    C = require('../../config').EMAIL.MANDIRLL

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
            }],
        }

        CLIENT.messages.send({
                "message": message,
                "async": false,
                "ip_pool": "Main Pool",
                "send_at": new Date()
            },
            result => console.info(`Basic email sent via Mandrill ${JSON.stringify(result)}`),
            e => console.error(`Exception encountered: ${e}!`))
    }

}