'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Mandrill SDK helpers.
 */

const CLIENT = new require('mandrill-api/mandrill')(require('../../config').EMAIL.MANDIRLL)

module.exports = {
    sendMail: (to, subject, text) => {
        const message = {
            "text": text,
            "subject": subject,
            "from_email": "message.from_email@example.com",
            "from_name": "Test User",
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
            result => console.log(result),
            e => console.error(`Exception encountered: ${e}!`))
    }

}