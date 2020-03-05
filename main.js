'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Main method and application initialization.
 */

const S = require('./server/http')

try {

    process.on('warning', warning => console.error(`Warning encountered: ${warning}`))
    process.on('unhandledRejection', rej => console.error(`Unhandled Rejection override: ${rej}`))
    process.on('uncaughtException', exception => console.error(`Error encountered: ${exception}`))
    process.on('exit', msg => console.log(`Service shutting down: ${msg}`))

    console.info('Initializing server...')
    S.createHttpServer(require('./config').PORT)

} catch (ex) {
    console.error(`Error encountered: ${ex}`)
    process.exit()
}
