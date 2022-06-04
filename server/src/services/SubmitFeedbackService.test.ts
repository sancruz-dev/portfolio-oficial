

// 

import { SubmitFeedbackService } from "./SubmitFeedbackService";

const createFeedbackSpy = jest.fn(); // [C]
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
   { create: createFeedbackSpy },
   { sendMail: sendMailSpy }
) // [A]

describe('Submit feedback', () => {
   it('should be able to submit a feedback', async () => {
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: 'exemple comment',
         screenshot: 'data:image/png;base64,jhkdshfdj',
      })).resolves.not.toThrow(); // [B]

      expect(createFeedbackSpy).toHaveBeenCalled();
      expect(sendMailSpy).toHaveBeenCalled();
   });

   it('should not be able to submit feedback without a type', async () => {
      await expect(submitFeedback.execute({
         type: '',
         comment: 'exemple comment',
         screenshot: 'data:image/png;base64,jhkdshfdj',
      })).rejects.toThrow(); // [B]
   });

   it('should not be able to submit feedback without a comment', async () => {
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: '',
         screenshot: 'data:image/png;base64,jhkdshfdj',
      })).rejects.toThrow(); // [B]
   });

   it('should not be able to submit feedback with an invalid screenshot', async () => {
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: 'example comment',
         screenshot: 'test.jpg',
      })).rejects.toThrow(); // [B]
   });
});




/*.. Anotações

   [A] Para que o TESTE UNITÁRIO aconteca, as dependências "prismaFeedbackRepository" e "nodemailerMailAdapter" do projeto terão que ser descartadas, pois se usarmos elas, deixaria de ser teste unitário para ser teste de BD ou de API's. Por isso foram criadas dependências falsas, para que seja testado somente o caso de uso, ou melhor, o SERVICE.

   [B] resolves.not.toThrow() --> em outras palavras: "espero que RESOLVA e que NÃO DISPARE NENHUM ERRO"

   [C] SPIES - ESPIÃS
   • Com funções spies, conseguimos saber quando a função foi chamada ou não. 
   • fn() é um exemplo de função espiã
   • No submitFeedback, não precisamos saber que o email foi realmente enviado ou que a informação foi salva no banco, mas podemos nos assegurar (com SPIES) que a função de criação de um novo feedback e envio de um email foi criada. Por que se não utilizarmos os spies, se a função "await this.mailAdapter.sendMail" for apagada, por exemplo, o teste dará sucesso, mas o código para enviar email estará quebrado.
*/