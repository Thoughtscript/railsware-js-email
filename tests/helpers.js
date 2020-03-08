'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Mandrill SDK helpers.
 */

const SMS = require('../server/sms/gateway')

module.exports = {
    testAddress: (address, expected) => {
        const isValid = address.match(/^[0-9a-zA-Z]+@[a-zA-Z]+(\.)[0-9a-zA-Z]+$/gm) !== null
        console.log(`Email address ${address} validated: [Actual: ${isValid} - Expected: ${expected}] - Passed: ${isValid === expected}`)
        return isValid
    },
    testHTML: (address, expected) => {
        const isValid = address.match(/<[0-9a-z]+\s?([a-z]+=\".+\")?>.*<\/[0-9a-z]+>/gm) !== null
        console.log(`HTML tag ${address} validated: [Actual: ${isValid} - Expected: ${expected}] - Passed: ${isValid === expected}`)
        return isValid
    },
    testSMS: (number, carrier, expected) => {
        const gatewayAddress = SMS.getSmsGateway(number, carrier)
        console.log(`SMS message by email for ${number} ${carrier} validated: [Actual: ${gatewayAddress} - Expected: ${expected}] - Passed: ${gatewayAddress === expected}`)
        return gatewayAddress
    }
}