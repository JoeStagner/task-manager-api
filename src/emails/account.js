const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = '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'

sgMail.setApiKey(process.nextTick.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}