/**
 * SMS Gateway Helpers.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

"use strict";

/**
 * All carriers should be included in a production environment.
 *
 * The list below includes a few of the largest carriers with public gateways.
 */

const textGateways =   {
    'att': '@txt.att.net',
    'verizon': '@vtext.com',
    't-mobile': '@tmomail.net',
    'alltel': '@message.alltel.com',
    'sprint': '@messaging.sprintpcs.com',
    'nextel': '@messaging.nextel.com',
    'suncom': '@tms.suncom.com'
};

module.exports = {
    getSmsGateway: (number, carrier) => `${number}${textGateways[carrier.toLowerCase()]}`
};