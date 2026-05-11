// @ts-ignore
import { Resend } from 'resend';
import { MailAdapter, SendMailData } from '../MailAdapter';

export class ResendMailAdapter implements MailAdapter {
  async sendMail({ sendlerName, sendlerEmail, subject, body }: SendMailData) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'sancruz.dev@gmail.com',
      subject,
      html: body,
      replyTo: `${sendlerName} <${sendlerEmail}>`,
    });
  }
}