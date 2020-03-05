'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Wrong endpoint handling!
 */

const C = require('./constants')

module.exports = {
    wrongEndpoint: async (url, req, res) => {

        if (C.VIEW_ROUTES.indexOf(url) === -1
            && C.API_ROUTES.indexOf(url) === -1
            && C.EMAIL_ROUTES.indexOf(url) === -1
            && !url.match(C.MIME_TYPE_CHECK_STRING)) {

            console.info(`${req.connection.remoteAddress} requested an endpoint that doesn't exist!`)
            res.setHeader('Content-type', 'application/json')
            const message = `Endpoint not found! Valid endpoints include ${C.VIEW_ROUTES} ${C.API_ROUTES} ${C.EMAIL_ROUTES}`
            res.write(JSON.stringify({status: 404, data: message}))
            res.end()
        }
    }
}
