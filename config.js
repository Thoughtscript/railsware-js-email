'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Configuration settings.
 *
 * See also: aws_config.json
 */


module.exports = {
    PORT: 7777,
    WORKERS: 4,
    PUBLIC: "public",
    EMAIL: {
        // May need to add to list of verified tests email account in provider dashboard
        TEST_EMAIL: "test.email@example.com",
        AWS: {
            // These need to be added to the verified email identities list in AWS
            BULK_LIST: ["example@email.com", "example2@email.com"]
        },
        MANDIRLL: {
            // Test API Key
            API_KEY: "3gs90395[392",
            /**
             * Required for testing
             * Domain must verified as well
             */
            VERIFIED_EMAIL: "verified@email.com",
            BULK_LIST: {
                FIRST: "verified@email.com",
                SECOND: "verified@email.com"
            }
        },
        AZURE_SENDGRID: {
            API_KEY: "gae3t5935t9at3itj3'tk3pt3t"
        },
        MAILGUN: {
            DOMAIN: "sandboxdwga3i39t3tgwea/.52325325f.mailgun.org",
            API_KEY: "atg90932492352536346363636hs5474574",
            PUBLIC_KEY: "pubkey-gao9905492592359-539-9392523jo5"
        }
    }
}