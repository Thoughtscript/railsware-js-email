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
        console.info(`Mandrill batch email is not supported!`)
        let r = await "Mandrill batch email is not supported!"
        return r
    },
    sendEmailWithAttachment: async () => {
        console.info(`Mandrill batch email is not supported!`)
        let r = await "Mandrill batch email is not supported!"
        return r
    }
}