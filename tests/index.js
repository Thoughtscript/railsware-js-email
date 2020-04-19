'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Validation unit tests and examples
 */

const TESTS = require('./helpers')
const UNIT_TESTS = () => {
    console.info('Initializing validation test examples...\n')

    console.info('Email address validation test examples...')
    TESTS.testAddress(`adam@example.com`, true)
    TESTS.testAddress(`dude@example.io`, true)
    TESTS.testAddress(`af@efw@.com`, false)
    TESTS.testAddress(`2f144ga2@w23222.1`, false)
    TESTS.testAddress(`24243@agwe.csfw.com`, false)
    console.info('Email address validation test examples complete...\n')

    console.info('HTML validation test examples...')
    TESTS.testHTML(`<a></a>`, true)
    TESTS.testHTML(`<html></html>`, true)
    TESTS.testHTML(`<p style="color:red;">This is a paragraph.</p>`, true)
    TESTS.testHTML(`<a href=""></a>`, false)
    TESTS.testHTML(`<link rel="stylesheet" type="text/css" href="mystyle.css">`, false)
    TESTS.testHTML(`<p>text<p>`, false)
    console.info('HTML validation test examples complete...\n')

    console.info('SMS validation test examples...')
    TESTS.testSMS('111-222-3333', 'att', "111-222-3333@txt.att.net")
    TESTS.testSMS('222-111-4444', 'verizon', "222-111-4444@vtext.com")
    TESTS.testSMS('123-123-1234', 't-mobile', "123-123-1234@tmomail.net")
    console.info('SMS validation test examples complete...\n')

    console.info('Validation tests complete...\n')
}

/**
 * Stand-alone tests - execute with: $ npm run tests
 */

try {

    process.on('warning', warning => console.error(`Warning encountered: ${warning}`))
    process.on('unhandledRejection', rej => console.error(`Unhandled Rejection override: ${rej}`))
    process.on('uncaughtException', exception => console.error(`Error encountered: ${exception}`))
    process.on('exit', msg => console.log(`Test service shutting down: ${msg}`))

    UNIT_TESTS()

} catch (ex) {
    console.error(`Error encountered: ${ex}`)
    process.exit()
}