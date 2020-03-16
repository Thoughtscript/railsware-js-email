# railsware-js-email

[![](https://img.shields.io/badge/Mandrill-gray.svg)](https://www.mandrill.com) [![](https://img.shields.io/badge/AWS-SES-Yellow.svg)](https://aws.amazon.com/ses/) [![](https://img.shields.io/badge/Azure-Sendgrid-blue.svg)](https://azuremarketplace.microsoft.com/marketplace/apps/SendGrid.SendGrid) [![](https://img.shields.io/badge/Mailgun-red.svg)](https://www.mailgun.com) [![](https://img.shields.io/badge/Node.js-13.8.0-yellowgreen.svg)](https://nodejs.org/en/) [![](https://img.shields.io/badge/LICENSE-MIT-red.svg)](./LICENSE)

[Railsware](https://railsware.com/blog/) code repo for the *JavaScript Email Validation* article.

This repo demonstrates how to use NodeJS for validation, to batch, and send emails.

> Check out the Railsware blog to learn several great [ways to send emails using](https://blog.mailtrap.io/react-send-email/) using handy client frameworks like [React.js](https://reactjs.org), [Email.js](https://www.emailjs.com), and [Nodemailer](https://nodemailer.com/about/). 

**Note:** All credentials supplied are dummy credentials!

## Features

1. Email SDK's, frameworks, and tools:

    1. [Mandrill (Mailchimp)](https://www.mandrill.com)
    1. [AWS Amazon SES](https://aws.amazon.com/ses/)
    1. [Microsoft Azure Sendgrid STMP Relay](https://azuremarketplace.microsoft.com/marketplace/apps/SendGrid.SendGrid)
    1. [Mailgun](https://www.mailgun.com)

1. Email attachment handling and batching via the above
1. Simple [SMS Gateway helper](tests/helpers) for sending texts

> Email and HTML template validation techniques are described in the [article]()! Unit tests are [also provided](tests/index.js).

## Use

Sign up for these email-related accounts:

1. [Mandrill (Mailchimp)](https://www.mandrill.com)
1. [AWS Amazon SES](https://aws.amazon.com/ses/)
1. [Microsoft Azure Sendgrid STMP Relay](https://azuremarketplace.microsoft.com/marketplace/apps/SendGrid.SendGrid)
1. [Mailgun](https://www.mailgun.com)

> Step-by-step instructions to do so are provided in the [article]()!
    
Configure settings in [config.js](/config.js)!

Start it up:

```BASH
npm i
npm run start
npm run tests
```

> By default, the http server will serve from http://localhost:7777

Shut it down:

```BASH
npm run stop-linux
nom run stop-linux
```

### Email API

> POST http://localhost:7777/email/ses

> POST http://localhost:7777/email/azure

> POST http://localhost:7777/email/mandrill

> POST http://localhost:7777/email/mailgun

Each email endpoint supports `basic`, `attachment`, `batch` like so:

```JSON
{
    "email": "basic"
}
```

**Note:** A couple `batch` endpoints are probably best served using a dedicated API through the automation provider - a response message is returned where this is the case.

### SMS

To send an SMS text message via email you need three components:

1. Send a basic email with text.
1. A valid phone number.
1. A valid carrier.

### Basic Test API

Supplied to create a more realistic example. Be forewarned:
 
1. These are ***very brittle*** and have no error handling!
2. Purely in-memory NoSQL!

> GET http://localhost:7777/api

```JSON
{"status":200,"data":[{"id":0,"name":"J Everyperson","email":"abcd@email.com","telegram_id":"@coolperson"},{"id":1,"name":"Larry Dude","email":"1234@email.com","telegram_id":"@dudeperson"},{"id":2,"name":"Ms. Ladyface","email":"efgh@email.com","telegram_id":"@ladyface"},{"id":3,"name":"J Nobody","email":"Nobody@email.com","telegram_id":"@Nobody"},{"id":4,"name":"Frankenstein","email":"monster@bash.com","telegram_id":"@monster"},{"id":5,"name":"Rockstar","email":"prima@donna.com","telegram_id":"@toocool"},{"id":6,"name":"beep boop","email":"imma@robot.com","telegram_id":"@robutnik"},{"id":7,"name":"Crazy Cat","email":"whiskers@chesire.com","telegram_id":"@meow"},{"id":8,"name":"The Red Devils","email":"market@garden.com","telegram_id":"@marketgarden"},{"id":9,"name":"Jar Jar Binks","email":"worst@character.ever","telegram_id":"@whatamievensaying"}]}
```

> GET http://localhost:7777/api/one?id=0

```JSON
{
    "status": 200,
    "data": {
        "id": 0,
        "name": "J Everyperson",
        "email": "abcd@email.com",
        "telegram_id": "@coolperson"
    }
}
```

> POST http://localhost:7777

```JSON
{
    "contact": {
        "id": 15,
        "name": "New Man",
        "email": "a@new.man",
        "telegram_id": "@newman"
    }
}
```

```JSON
{
    "status": 200,
    "data": [
        {
            "id": 0,
            "name": "J Everyperson",
            "email": "abcd@email.com",
            "telegram_id": "@coolperson"
        },
        {
            "id": 1,
            "name": "Larry Dude",
            "email": "1234@email.com",
            "telegram_id": "@dudeperson"
        },
        {
            "id": 2,
            "name": "Ms. Ladyface",
            "email": "efgh@email.com",
            "telegram_id": "@ladyface"
        },
        {
            "id": 3,
            "name": "J Nobody",
            "email": "Nobody@email.com",
            "telegram_id": "@Nobody"
        },
        {
            "id": 4,
            "name": "Frankenstein",
            "email": "monster@bash.com",
            "telegram_id": "@monster"
        },
        {
            "id": 5,
            "name": "Rockstar",
            "email": "prima@donna.com",
            "telegram_id": "@toocool"
        },
        {
            "id": 6,
            "name": "beep boop",
            "email": "imma@robot.com",
            "telegram_id": "@robutnik"
        },
        {
            "id": 7,
            "name": "Crazy Cat",
            "email": "whiskers@chesire.com",
            "telegram_id": "@meow"
        },
        {
            "id": 8,
            "name": "The Red Devils",
            "email": "market@garden.com",
            "telegram_id": "@marketgarden"
        },
        {
            "id": 9,
            "name": "Jar Jar Binks",
            "email": "worst@character.ever",
            "telegram_id": "@whatamievensaying"
        },
        null,
        null,
        null,
        null,
        null,
        {
            "id": 15,
            "name": "New Man",
            "email": "a@new.man",
            "telegram_id": "@newman"
        }
    ]
}
```

> PUT http://localhost:7777

```JSON
{
    "contact": {
        "id": 0,
        "name": "Changed Man",
        "email": "not@the.same",
        "telegram_id": "@differentperson"
    }
}
```

```JSON
{
    "status": 200,
    "data": [
        {
            "id": 0,
            "name": "Changed Man",
            "email": "not@the.same",
            "telegram_id": "@differentperson"
        },
        {
            "id": 1,
            "name": "Larry Dude",
            "email": "1234@email.com",
            "telegram_id": "@dudeperson"
        },
        {
            "id": 2,
            "name": "Ms. Ladyface",
            "email": "efgh@email.com",
            "telegram_id": "@ladyface"
        },
        {
            "id": 3,
            "name": "J Nobody",
            "email": "Nobody@email.com",
            "telegram_id": "@Nobody"
        },
        {
            "id": 4,
            "name": "Frankenstein",
            "email": "monster@bash.com",
            "telegram_id": "@monster"
        },
        {
            "id": 5,
            "name": "Rockstar",
            "email": "prima@donna.com",
            "telegram_id": "@toocool"
        },
        {
            "id": 6,
            "name": "beep boop",
            "email": "imma@robot.com",
            "telegram_id": "@robutnik"
        },
        {
            "id": 7,
            "name": "Crazy Cat",
            "email": "whiskers@chesire.com",
            "telegram_id": "@meow"
        },
        {
            "id": 8,
            "name": "The Red Devils",
            "email": "market@garden.com",
            "telegram_id": "@marketgarden"
        },
        {
            "id": 9,
            "name": "Jar Jar Binks",
            "email": "worst@character.ever",
            "telegram_id": "@whatamievensaying"
        }
    ]
}
```

> DELETE localhost:7777/api/?id=1

```JSON
{
    "status": 200,
    "data": [
        {
            "id": 0,
            "name": "J Everyperson",
            "email": "abcd@email.com",
            "telegram_id": "@coolperson"
        },
        null,
        {
            "id": 2,
            "name": "Ms. Ladyface",
            "email": "efgh@email.com",
            "telegram_id": "@ladyface"
        },
        {
            "id": 3,
            "name": "J Nobody",
            "email": "Nobody@email.com",
            "telegram_id": "@Nobody"
        },
        {
            "id": 4,
            "name": "Frankenstein",
            "email": "monster@bash.com",
            "telegram_id": "@monster"
        },
        {
            "id": 5,
            "name": "Rockstar",
            "email": "prima@donna.com",
            "telegram_id": "@toocool"
        },
        {
            "id": 6,
            "name": "beep boop",
            "email": "imma@robot.com",
            "telegram_id": "@robutnik"
        },
        {
            "id": 7,
            "name": "Crazy Cat",
            "email": "whiskers@chesire.com",
            "telegram_id": "@meow"
        },
        {
            "id": 8,
            "name": "The Red Devils",
            "email": "market@garden.com",
            "telegram_id": "@marketgarden"
        },
        {
            "id": 9,
            "name": "Jar Jar Binks",
            "email": "worst@character.ever",
            "telegram_id": "@whatamievensaying"
        }
    ]
}
```

## License

[MIT Licensed](https://opensource.org/licenses/MIT) - [view the license](LICENSE.md).
