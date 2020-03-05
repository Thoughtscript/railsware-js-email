'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Azure Sendgrid SDK helpers.
 */

const C = require('../../config').EMAIL.AZURE_SENDGRID,
    S = require('sendgrid'),
    CLIENT = S(C.USERNAME, C.PASSWORD)

module.exports = {
    sendMail: (to, subject, text) => {

        const email = new S.Email({
            to: to,
            from: 'test@email.com',
            subject: subject,
            text: text
        })

        CLIENT.send(email, (err, json) => {
            if (err) return console.error(`Exception encountered: ${err}!`)
            console.info(`Email sent: ${email}!`)
        })
    }

}