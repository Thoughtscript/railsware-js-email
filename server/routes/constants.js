'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * MIME constants.
 */

const MIME_TYPE_MAP = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword',
        '.eot': 'appliaction/vnd.ms-fontobject',
        '.ttf': 'aplication/font-sfnt'
    },
    MIME_TYPES = Object.keys(MIME_TYPE_MAP),
    MIME_TYPE_CHECK_STRING = '(' + MIME_TYPES.join('|').replace(/\./g, '\\.') + '){1}$',
    VIEW_ROUTES = ['/', ''],
    API_ROUTES = ['/api','/api/', '/api/one/', '/api/one'],
    EMAIL_ROUTES =['/email/ses/', '/email/ses',
        '/email/azure/', '/email/azure',
        '/email/mandrill/', '/email/mandrill',
        '/email/mailgun/', '/email/mailgun']

module.exports = {
    MIME_TYPE_MAP: MIME_TYPE_MAP,
    MIME_TYPES: MIME_TYPES,
    MIME_TYPE_CHECK_STRING: MIME_TYPE_CHECK_STRING,
    VIEW_ROUTES: VIEW_ROUTES,
    API_ROUTES: API_ROUTES,
    EMAIL_ROUTES: EMAIL_ROUTES
}