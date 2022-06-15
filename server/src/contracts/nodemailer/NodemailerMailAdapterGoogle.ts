import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../MailAdapter";
import { SMTP_SENDINBLUE } from '../config/smtp'

const transport = nodemailer.createTransport({
   host: SMTP_SENDINBLUE.host,
   port: SMTP_SENDINBLUE.port,
   secure: false,
   auth: {
      user: SMTP_SENDINBLUE.user,
      pass: SMTP_SENDINBLUE.pass,
   },
   tls: {
      rejectUnauthorized: false,
   },
});

export class NodemailerMailAdapterGoogle implements MailAdapter {
   async sendMail({sendlerName, sendlerEmail, subject, body}: SendMailData) {
      await transport.sendMail({
         from: `${sendlerName} <${sendlerEmail}>`,
         to: 'SanCruz Dev <sancruz.dev@gmail.com>',
         subject,
         html: body,
      });
   };
}

/* CÓDIGO ANTIGO

import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
      user: "50477523d758c5",
      pass: "58ca3b90fea2d1"
   }
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData) {
      await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com>',
         to: 'Sanmir Cruz <sancruz.dev@gmail.com>',
         subject,
         html: body,
      });
   };
} */
