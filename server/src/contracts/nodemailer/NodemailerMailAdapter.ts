import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../MailAdapter";
import { SMTP_MAILTRAP, SMTP_GOOGLE } from '../config/smtp'

const transport = nodemailer.createTransport({
   host: SMTP_MAILTRAP.host,
   port: SMTP_MAILTRAP.port,
   secure: false,
   auth: {
      user: SMTP_MAILTRAP.user,
      pass: SMTP_MAILTRAP.pass,
   },
   tls: {
      rejectUnauthorized: false,
   },
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({sendlerName, sendlerEmail, subject, body}: SendMailData) {
      await transport.sendMail({
         from: `${sendlerName} <${sendlerEmail}>`,
         to: 'SanCruz Dev <sancruz.dev@gmail.com>',
         subject,
         html: body,
      });
   };
}
