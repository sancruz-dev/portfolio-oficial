/* 
   - class SubmitFormService --> executa a criação/submição de um novo Form
   - Para enviar um Form é preciso dados/request
*/

import { MailAdapter } from "../contracts/MailAdapter";
import { FormsRepository } from "../res/FormsRepository";

interface SubmitFormServiceRequest {
   name: string;
   email: string;
   comment: string;
}

export class SubmitFormService {
   constructor(
      private FormsRepository: FormsRepository,
      private mailAdapter: MailAdapter, // Depende da interface e não da implementação 
   ) { }

   async execute(request: SubmitFormServiceRequest) {
      const { name, email, comment } = request;

      if (!name) {
         throw new Error('Name is required.')
      }

      if (!email) {
         throw new Error('Email is required.')
      }

      if (!comment) {
         throw new Error('Comment is required.')
      }

      await this.FormsRepository.create({
         name, 
         email,
         comment
      })

      await this.mailAdapter.sendMail({
         sendlerName: `${name}`,
         sendlerEmail: `${email}`,
         subject: 'Novo Form',
         body: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #333">`,
            `<p>Nome: ${name}</p>`,
            `<p>Email: ${email}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
         ].join('\n')
      })
   }
}