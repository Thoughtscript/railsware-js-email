'use strict'

// ES6 function notation
const API = (path) => `http://localhost:7777/email/${path}`

const el = (elm) => document.getElementById(elm)

const asyncDataPost = (url, data, token) => {
    return new Promise((res, rej) => {
        try {
            let r = new XMLHttpRequest()
            r.onreadystatechange = () => {
                if (r.readyState === 4) {
                    if (r.status === 200) {
                        console.log(`Success!`)
                        return res(r.response)
                    }
                    else console.error(`Failure!`)
                }
            }
            r.open('POST', url, true)
            r.setRequestHeader('Content-type', 'application/json')
            r.setRequestHeader('Access-Control-Allow-Headers', '*')
            r.setRequestHeader('Allow-Control-Allow-Origin', '*')
            r.withCredentials = false
            if (token !== null) r.setRequestHeader('Authorization', 'bearer ' + token)
            r.send(data)
        } catch (ex) {
            console.error(`Exception encountered: ${ex}!`)
        }
    })
}

window.onload = () => {

    el("ses").addEventListener("click", e => {
        asyncDataPost(API("ses"), JSON.stringify({"email": "basic"}))
        e.preventDefault()
    })

    el("azure").addEventListener("click", e => {
        asyncDataPost(API("azure"), JSON.stringify({"email": "basic"}))
        e.preventDefault()
    })

    el("mandrill").addEventListener("click", e => {
        asyncDataPost(API("mandrill"), JSON.stringify({"email": "basic"}))
        e.preventDefault()
    })

    el("mailgun").addEventListener("click", e => {
        asyncDataPost(API("mailgun"), JSON.stringify({"email": "basic"}))
        e.preventDefault()
    })

}