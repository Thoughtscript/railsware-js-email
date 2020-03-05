'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Mailgun SDK helpers.
 */

const C = require('../../config').EMAIL.MAILGUN,

    CLIENT = new require('mailgun.js').client({
        username: C.USERNAME,
        key: C.API_KEY || '',
        public_key: c.PUBLIC_KEY || 'pubkey-yourkeyhere'
    })

module.exports = {

    sendMail: (to, subject, text) => {
        CLIENT.messages.create(domain, {
            from: "test@example.com",
            to: to,
            subject: subject,
            text: text
        })
            .then(msg => console.log(msg))
            .catch(err => console.error(err))
    }

}