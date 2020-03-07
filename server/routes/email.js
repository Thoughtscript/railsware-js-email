'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Email API - no error handling - for demonstration purposes only!
 */

const E = require('./constants').EMAIL_ROUTES,
    AWS = require('../services/awsSesService'),
    AZURE = require('../services/azureSendgridService'),
    MAILGUN = require('../services/mailgunService'),
    MANDRILL = require('../services/mandrillService')

module.exports = {
    createApi: async (url, req, res) => {

        if (E.indexOf(url) !== -1) {

            console.info(`${req.connection.remoteAddress} connected to Email API!`)
            res.setHeader('Content-type', 'application/json')

            if (url === E[0] || url === E[1]) {
                if (req.method === "POST" || req.method.toLowerCase() === "post") {
                    return await new Promise((resolve, reject) => {
                        let bodyData = ''
                        req.on('data', postData => {bodyData += postData})
                        req.on('end', end => resolve(bodyData))
                    }).then(body => {
                        const email = JSON.parse(body).email
                        if (email === "basic") {
                            AWS.sendBasicEmail().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                        if (email === "batch") {
                            AWS.sendBatchEmail().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                        if (email === "attachment") {
                            AWS.sendEmailWithAttachment().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                    })
                }
            }

            if (url === E[2] || url === E[3]) {
                if (req.method === "POST") {
                    return await new Promise((resolve, reject) => {
                        let bodyData = ''
                        req.on('data', postData => {bodyData += postData})
                        req.on('end', end => resolve(bodyData))
                    }).then(body => {
                        const email = JSON.parse(body).email
                        if (email === "basic") {
                            AZURE.sendBasicEmail().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                        if (email === "batch") {
                            AZURE.sendBatchEmail().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                        if (email === "attachment") {
                            AZURE.sendEmailWithAttachment().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                    })
                }
            }

            if (url === E[4] || url === E[5]) {
                if (req.method === "POST") {
                    return await new Promise((resolve, reject) => {
                        let bodyData = ''
                        req.on('data', postData => {bodyData += postData})
                        req.on('end', end => resolve(bodyData))
                    }).then(body => {
                        const email = JSON.parse(body).email
                        if (email === "basic") {
                            MANDRILL.sendBasicEmail().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                        if (email === "batch") {
                            MANDRILL.sendBatchEmail().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                        if (email === "attachment") {
                            MANDRILL.sendEmailWithAttachment().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                    })
                }
            }

            if (url === E[6] || url === E[7]) {
                if (req.method === "POST") {
                    return await new Promise((resolve, reject) => {
                        let bodyData = ''
                        req.on('data', postData => {bodyData += postData})
                        req.on('end', end => resolve(bodyData))
                    }).then(body => {
                        const email = JSON.parse(body).email
                        if (email === "basic") {
                            MAILGUN.sendBasicEmail().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                        if (email === "batch") {
                            MAILGUN.sendBatchEmail().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                        if (email === "attachment") {
                            MAILGUN.sendEmailWithAttachment().then(result => {
                                res.write(JSON.stringify({status: 200, data: result}))
                                res.end()
                            })
                        }
                    })
                }
            }

            res.statusCode = 200
            res.end()
        }
    }
}
