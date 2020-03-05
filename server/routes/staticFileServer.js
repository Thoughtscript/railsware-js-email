'use strict'

const FS = require('fs'),
    P = require('path'),
    CO = require('./constants'),
    C = require('../../config')

module.exports = {
    createStaticFileServer: (url, req, res) => {
        const M = url.match(CO.MIME_TYPE_CHECK_STRING)

        if (url === CO.VIEW_ROUTES[0] || url === CO.VIEW_ROUTES[1]) {
            console.info(`${req.connection.remoteAddress} connected to static file server!`)
            res.writeHead(200, {'Content-Type': 'text/html'})
            FS.createReadStream(P.join(__dirname, '../../', C.PUBLIC, 'index.html')).pipe(res)

        } else if (M !== null && M.length > 0) {
            try {
                const EXT = P.extname(url)
                FS.readFile(P.join(__dirname, '../../', C.PUBLIC, url), (err, content) => {
                    if (err) {
                        res.statusCode = 500
                        res.end()
                        console.error(`Exception encountered: ${err}!`)
                    }
                    res.writeHead(200, {'Content-Type': CO.MIME_TYPE_MAP[EXT] || 'text/plain'})
                    res.end(content, 'utf-8')
                })

            } catch (ex) {
                res.statusCode = 500
                res.end()
                console.error(`Exception encountered: ${ex}!`)
            }
        }
    }
}