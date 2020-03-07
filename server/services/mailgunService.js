'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Mailgun SDK helpers.
 */

const H = require('../email/mailgun'),
    C = require('../../config').EMAIL

module.exports = {
    sendBasicEmail: async () => {
        H.sendBasicEmail(C.TEST_EMAIL, "Mailgun basic email", "Mailgun basic email")
        let r = await "Success"
        return r
    },
    sendBatchEmail: async () => {
        H.sendBasicEmail(C.TEST_EMAIL, "Mailgun batch email", "Mailgun batch email")
        let r = await "Success! Make sure to create a mailing list alias!"
        return r
    },
    sendEmailWithAttachment: async () => {
        H.sendEmailWithAttachment(C.TEST_EMAIL, "Mailgun attachment email", "Mailgun attachment email")
        let r = await "Success"
        return r
    }
}