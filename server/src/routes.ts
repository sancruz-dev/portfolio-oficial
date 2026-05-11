import express from 'express'
import { ResendMailAdapter } from './contracts/resend/ResendMailAdapter';
import { PrismaFeedbackRepository } from './res/prisma/PrismaFeedbacksRepository';
import { PrismaFormRepository } from './res/prisma/PrismaFormsRepository';


export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const startTime = Date.now();
  
  try {
    console.log('📨 [FEEDBACK] Iniciando processamento...');
    
    const { type, comment, screenshot } = req.body;

    // Validação básica
    if (!type || !comment) {
      console.log('❌ [FEEDBACK] Dados inválidos');
      return res.status(400).json({ 
        error: 'Type and comment são obrigatórios'
      });
    }

    console.log('⏳ [FEEDBACK] Salvando no banco primeiro...');

    // ESTRATÉGIA: Salvar no banco PRIMEIRO (operação rápida)
    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    await prismaFeedbackRepository.create({ type, comment, screenshot });
    
    const dbSaveTime = Date.now() - startTime;
    console.log(`💾 [FEEDBACK] Salvo no banco em ${dbSaveTime}ms`);
    
    // RESPOSTA IMEDIATA para o usuário
    res.status(201).json({ 
      success: true,
      message: 'Feedback enviado com sucesso',
      processTime: `${dbSaveTime}ms`
    });

    // PROCESSO EM BACKGROUND: Tentar enviar email (não bloquear resposta)
    console.log('📧 [FEEDBACK] Enviando email em background...');
    
    const resendMailAdapter = new ResendMailAdapter();

    try {
      resendMailAdapter.sendMail({
        sendlerName: `Feedback Portfolio`,
        sendlerEmail: `noreply@portfolio.com`,
        subject: 'Novo feedback',
        body: [
          `<div style="font-family: sans-serif; font-size: 16px; color: #333">`,
          `<p>Tipo do feedback: ${type}</p>`,
          `<p>Comentário: ${comment}</p>`,
          screenshot ? `<p>Screenshot anexado</p>` : ``,
          `</div>`
        ].join('\n')
      });
      const totalTime = Date.now() - startTime;
      console.log(`✅ [FEEDBACK] Email enviado com sucesso em ${totalTime}ms`);

    } catch (error) {
      const totalTime = Date.now() - startTime;
      console.log(`⚠️ [FEEDBACK] Email falhou após ${totalTime}ms, mas dados salvos:`, error);
    }
    
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`❌ [FEEDBACK] Erro após ${duration}ms:`, error);
    
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: 'Algo deu errado. Tente novamente.'
    });
  }
});

routes.post('/form', async (req, res) => {
  const startTime = Date.now();
  
  try {
    console.log('📨 [FORM] Iniciando processamento...');
    
    const { name, email, comment } = req.body;

    // Validação básica
    if (!name || !email || !comment) {
      console.log('❌ [FORM] Dados inválidos');
      return res.status(400).json({ 
        error: 'Name, email e comment são obrigatórios'
      });
    }

    console.log('⏳ [FORM] Salvando no banco primeiro...');

    // ESTRATÉGIA: Salvar no banco PRIMEIRO
    const prismaFormRepository = new PrismaFormRepository();
    await prismaFormRepository.create({ name, email, comment });
    
    const dbSaveTime = Date.now() - startTime;
    console.log(`💾 [FORM] Salvo no banco em ${dbSaveTime}ms`);
    
    // RESPOSTA IMEDIATA para o usuário
    res.status(201).json({ 
      success: true,
      message: 'Formulário enviado com sucesso',
      processTime: `${dbSaveTime}ms`
    });

    // EMAIL EM BACKGROUND
    console.log('📧 [FORM] Enviando email em background...');
    
    const resendMailAdapter = new ResendMailAdapter();

    Promise.race([
      resendMailAdapter.sendMail({
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
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 5000)
      )
    ]).then(() => {
      const totalTime = Date.now() - startTime;
      console.log(`✅ [FORM] Email enviado com sucesso em ${totalTime}ms`);
    }).catch((error) => {
      const totalTime = Date.now() - startTime;
      console.log(`⚠️ [FORM] Email falhou após ${totalTime}ms, mas dados salvos:`, error.message);
    });
    
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`❌ [FORM] Erro após ${duration}ms:`, error);
    
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: 'Algo deu errado. Tente novamente.'
    });
  }
});