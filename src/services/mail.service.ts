import config from '@hn/configs/env'
import { createTransport } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const transport = createTransport({
  host: config.mailHost,
  port: config.mailPort,
  auth: {
    user: config.mailUser,
    pass: config.mailPassword
  }
})

export const MailService = {
  sendMail: async ({ from, to, subject, html }: Mail.Options) => {
    return transport.sendMail({
      from, // sender address
      to, // list of receivers
      subject, // Subject line
      html // html body
    })
  }
}
