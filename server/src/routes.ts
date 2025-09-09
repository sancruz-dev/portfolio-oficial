import express from 'express'
import { NodemailerMailAdapter } from './contracts/nodemailer/NodemailerMailAdapter';
import { NodemailerMailAdapterGoogle } from './contracts/nodemailer/NodemailerMailAdapterGoogle';
import { PrismaFeedbackRepository } from './res/prisma/PrismaFeedbacksRepository';
import { SubmitFeedbackService } from './services/SubmitFeedbackService';
import { PrismaFormRepository } from './res/prisma/PrismaFormsRepository';
import { SubmitFormService } from './services/SubmitFormService';

export const routes = express.Router()

// Função helper para criar timeout
const withTimeout = <T>(promise: Promise<T>, timeoutMs: number = 10000): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`Operação timeout após ${timeoutMs}ms`)), timeoutMs)
    )
  ]);
};

routes.post('/feedbacks', async (req, res) => {
  try {
    console.log('📨 Recebendo feedback:', req.body);
    
    const { type, comment, screenshot } = req.body;

    // Validação básica
    if (!type || !comment) {
      console.log('❌ Dados inválidos');
      return res.status(400).json({ 
        error: 'Type and comment são obrigatórios',
        received: { type: !!type, comment: !!comment, screenshot: !!screenshot }
      });
    }

    console.log('⏳ Processando feedback...');

    // Criar instâncias
    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const submitFeedbackService = new SubmitFeedbackService(
      prismaFeedbackRepository, 
      nodemailerMailAdapter
    );

    // Executar com timeout
    await withTimeout(
      submitFeedbackService.execute({ type, comment, screenshot }),
      15000 // 15 segundos
    );
    
    console.log('✅ Feedback processado com sucesso');
    return res.status(201).json({ 
      success: true,
      message: 'Feedback enviado com sucesso'
    });
    
  } catch (error) {
    console.error('❌ Erro ao processar feedback:', error);
    
    // Retornar erro específico
    if (error instanceof Error && error.message.includes('timeout')) {
      return res.status(408).json({ 
        error: 'Timeout na operação',
        message: 'A operação demorou muito para responder. Tente novamente.'
      });
    }

    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: process.env.NODE_ENV === 'development' 
        ? (error instanceof Error ? error.message : 'Erro desconhecido')
        : 'Algo deu errado. Tente novamente.'
    });
  }
});

routes.post('/form', async (req, res) => {
  try {
    console.log('📨 Recebendo formulário:', req.body);
    
    const { name, email, comment } = req.body;

    // Validação básica
    if (!name || !email || !comment) {
      console.log('❌ Dados inválidos');
      return res.status(400).json({ 
        error: 'Name, email e comment são obrigatórios',
        received: { name: !!name, email: !!email, comment: !!comment }
      });
    }

    console.log('⏳ Processando formulário...');

    // Criar instâncias
    const prismaFormRepository = new PrismaFormRepository();
    const nodemailerMailAdapterGoogle = new NodemailerMailAdapterGoogle();
    const submitFormService = new SubmitFormService(
      prismaFormRepository, 
      nodemailerMailAdapterGoogle
    );

    // Executar com timeout
    await withTimeout(
      submitFormService.execute({ name, email, comment }),
      15000 // 15 segundos
    );

    console.log('✅ Formulário processado com sucesso');
    return res.status(201).json({ 
      success: true,
      message: 'Formulário enviado com sucesso'
    });
    
  } catch (error) {
    console.error('❌ Erro ao processar formulário:', error);
    
    // Retornar erro específico
    if (error instanceof Error && error.message.includes('timeout')) {
      return res.status(408).json({ 
        error: 'Timeout na operação',
        message: 'A operação demorou muito para responder. Tente novamente.'
      });
    }

    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: process.env.NODE_ENV === 'development' 
        ? (error instanceof Error ? error.message : 'Erro desconhecido')
        : 'Algo deu errado. Tente novamente.'
    });
  }
});