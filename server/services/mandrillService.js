'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Mandrill SDK helpers.
 */

const H = require('../email/mandrill'),
    C = require('../../config').EMAIL.MANDIRLL

module.exports = {
    sendBasicEmail: async () => {
        H.sendBasicEmail(C.VERIFIED_EMAIL, C.VERIFIED_EMAIL, "Mandrill basic email", "Mandrill basic email")
        let r = await "Success"
        return r
    },

    sendEmailWithAttachment: async () => {
        H.sendEmailWithAttachment(C.VERIFIED_EMAIL, C.VERIFIED_EMAIL, "Mandrill attachment email", "Mandrill attachment email")
        let r = await "Success!"
        return r
    },

    sendBatchEmail: async () => {
        H.sendBatchEmail(C.BULK_LIST, C.VERIFIED_EMAIL, "Mandrill batch email", "Mandrill batch email")
        let r = await "Success! Also try Mailchimp 3.0 to manage large lists and automate your workflow!"
        return r
    }
}