'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Configuration settings.
 */


module.exports = {
    PORT: 7777,
    WORKERS: 4,
    PUBLIC: "public",
    EMAIL: {
        MANDIRLL: "",
        AWS_SES: "",
        AZURE_SENDGRID: {
            USERNAME: "",
            PASSWORD: ""
        },
        MAILGUN: {
            USERNAME: "",
            API_KEY: "",
            PUBLIC_KEY: ""
        }
    }
}