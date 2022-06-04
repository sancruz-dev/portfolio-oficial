import { prisma } from "../../prisma";
import { FeedbacksCreateData, FeedbacksRepository } from "../FeedbacksRepository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
   async create({type, comment, screenshot}: FeedbacksCreateData) {
      await prisma.feedback.create({
         data: {
            type,
            comment,
            screenshot,
         }
      }) // [A]
   }
}





/*...Anotações

   • [A] async await
   Faz com que o express espere a operação do banco ser finalizada, para então ser retornado uma resposta ao frontend.
*/