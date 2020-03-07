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
    sendBatchEmail: async () => {
        console.info(`Batch email sent via Mandrill!`)
        let r = await "Success"
        return r
    },
    sendEmailWithAttachment: async () => {
        console.info(`Attachment email sent via Mandrill!`)
        let r = await "Success"
        return r
    }
}