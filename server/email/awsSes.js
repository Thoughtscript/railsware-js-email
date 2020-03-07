'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * AWS SES SDK helpers.
 */

const FS = require('fs'),
    AWS = require('aws-sdk'),
    P = require('path')

AWS.config.loadFromPath(P.join(__dirname, '../../', 'aws_config.json'));

const CLIENT = new AWS.SES()

module.exports = {

    sendBasicEmail: (to, from, subject, text) => {

        const email = {
            Destination: {
                ToAddresses: [to]
            },
            Message: {
                Body: {
                    Text: {
                        Charset: "UTF-8",
                        Data: text
                    }
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: subject
                }
            },
            Source: from
        }

        CLIENT.sendEmail(email, (err, data) => {
            if (err) return console.error(`Exception encountered: ${err}!`)
            else console.info(`Basic email sent via AWS! ${JSON.stringify(data)}`)
        })
    },

    sendBatchEmail: (to, from, subject, text) => {

        const email = {
            Destination: {
                ToAddresses: to
            },
            Message: {
                Body: {
                    Text: {
                        Charset: "UTF-8",
                        Data: text
                    }
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: subject
                }
            },
            Source: from
        }

        CLIENT.sendEmail(email, (err, data) => {
            if (err) return console.error(`Exception encountered: ${err}!`)
            else console.info(`Batch email sent via AWS! ${JSON.stringify(data)}`)
        })


    },

    sendEmailWithAttachment: (to, from, subject, text) => {

        // Email to, from, subject
        let emailAsString = `From: ${from}\n`
        emailAsString += `To: ${to}\n`
        emailAsString += `Subject: ${subject}\n`

        // Multipart info
        emailAsString += `MIME-Version: 1.0\m`
        emailAsString += `Content-Type: multipart/mixed; boundary=\"IamAboundary\"\n\n`

        // Email body
        emailAsString += `--IamAboundary\n`
        emailAsString += `Content-Type: text/html\n\n`
        emailAsString += `${text}\n\n`
        emailAsString += `--IamAboundary\n`

        // Attachment
        emailAsString += `Content-Type: application/png; name=\"attachment.png\"\n`
        emailAsString += `Content-Transfer-Encoding: base64\n`
        emailAsString += `Content-Disposition: attachment\n\n`
        const attachment =  FS.readFileSync(P.join(__dirname, '../', 'data/attachment.png'))
        emailAsString += `${attachment.toString("base64")}\n\n`
        emailAsString += `--IamAboundary`

        const raw = {
            RawMessage: {Data: emailAsString},
            Source: from
        }

        CLIENT.sendRawEmail(raw, (err, data) => {
            if (err) return console.error(`Exception encountered: ${err}!`)
            else console.info(`Attachment email sent via AWS! ${JSON.stringify(data)}`)
        })
    }

}