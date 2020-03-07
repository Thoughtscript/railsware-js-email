'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * AWS SES SDK helpers.
 */

const H = require('../email/awsSes'),
    C = require('../../config').EMAIL

module.exports = {
    sendBasicEmail: async () => {
        H.sendBasicEmail(C.TEST_EMAIL, C.TEST_EMAIL,"AWS SES basic mail", "AWS SES basic email")
        let r = await "Success"
        return r
    },
    sendBatchEmail: async () => {
        H.sendBatchEmail(C.AWS.BULK_LIST, C.TEST_EMAIL,"AWS Batch email", "AWS SES email")
        let r = await "Success"
        return r
    },
    sendEmailWithAttachment: async () => {
        H.sendEmailWithAttachment(C.TEST_EMAIL, C.TEST_EMAIL,"AWS SES attachment email", "AWS SES attachment email")
        let r = await "Success"
        return r
    }
}