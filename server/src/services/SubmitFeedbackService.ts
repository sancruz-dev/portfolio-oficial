/* 
   - class SubmitFeedbackService --> executa a criação/submição de um novo feedback
   - Para enviar um feedback é preciso dados/request
*/

import { MailAdapter } from "../contracts/MailAdapter";
import { FeedbacksRepository } from "../res/FeedbacksRepository";

interface SubmitFeedbackServiceRequest {
   type: string;
   comment: string;
   screenshot?: string;
}

export class SubmitFeedbackService {
   constructor(
      private feedbacksRepository: FeedbacksRepository,
      private mailAdapter: MailAdapter, // Depende da interface e não da implementação 
   ) { }

   async execute(request: SubmitFeedbackServiceRequest) {
      const { type, comment, screenshot } = request;

      if (!type) {
         throw new Error('Type is required.')
      }
      if (!comment) {
         throw new Error('Comment is required.')
      }

      if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
         throw new Error('Invalid screenshot format.')
      }

      await this.feedbacksRepository.create({
         type,
         comment,
         screenshot,
      })

      await this.mailAdapter.sendMail({
         sendlerName: `Alguém`,
         sendlerEmail: `alguem@gmail.com`,
         subject: 'Novo feedback',
         body: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #333">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            screenshot ? `<img src="${screenshot}" width="100px" height="100px" /> ` : ``,
            `</div>`
         ].join('\n')
      })

      /** JEITO ERRADO PARA SALVAR NO BD (Sem o princípio de dependency inversion)

      const prismaFeedbackRepository = new PrismaFeedbackRepository();

      await prismaFeedbackRepository.create({
         type,
         comment, 
         screenshot,
      }) */
   }
}