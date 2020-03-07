'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Azure Sendgrid SDK helpers.
 */

const H = require('../email/azureSendgrid'),
    C = require('../../config').EMAIL

module.exports = {
    sendBasicEmail: async () => {
        H.sendBasicEmail(C.TEST_EMAIL, "Azure SendGrid basic email", "Azure SendGrid basic email")
        let r = await "Success"
        return r
    },
    sendBatchEmail: async () => {
        H.sendBatchEmail(C.TEST_EMAIL, "Azure SendGrid batch email", "Azure SendGrid batch email")
        let r = await "Success"
        return r
    },
    sendEmailWithAttachment: async () => {
        H.sendEmailWithAttachment(C.TEST_EMAIL, "Azure SendGrid attachment email", "Azure SendGrid attachment email")
        let r = await "Success"
        return r
    }
}