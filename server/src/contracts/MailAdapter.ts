export interface SendMailData { 
   sendlerName: string;
   sendlerEmail: string;
   subject: string;
   body: string;
}

export interface MailAdapter {
   sendMail: (data: SendMailData) => Promise<void>;
}