import express from 'express'
import { NodemailerMailAdapter } from './contracts/nodemailer/NodemailerMailAdapter';
import { NodemailerMailAdapterGoogle } from './contracts/nodemailer/NodemailerMailAdapterGoogle';
import { PrismaFeedbackRepository } from './res/prisma/PrismaFeedbacksRepository';
import { SubmitFeedbackService } from './services/SubmitFeedbackService';

import { PrismaFormRepository } from './res/prisma/PrismaFormsRepository';
import { SubmitFormService } from './services/SubmitFormService';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
   try {
      console.log('Received feedback request:', req.body);
      
      const { type, comment, screenshot } = req.body;

      if (!type || !comment) {
         return res.status(400).json({ 
            error: 'Type and comment are required',
            received: { type, comment, screenshot: !!screenshot }
         });
      }

      const prismaFeedbackRepository = new PrismaFeedbackRepository();
      const nodemailerMailAdapter = new NodemailerMailAdapter();
      const submitFeedbackService = new SubmitFeedbackService(
         prismaFeedbackRepository, 
         nodemailerMailAdapter
      );

      await submitFeedbackService.execute({
         type,
         comment, 
         screenshot,
      });   
      
      console.log('Feedback processed successfully');
      return res.status(201).json({ message: 'Feedback sent successfully' });
      
   } catch (error) {
      console.error('Error processing feedback:', error);
      return res.status(500).json({ 
         error: 'Internal server error',
         message: error instanceof Error ? error.message : 'Unknown error'
      });
   }
});

routes.post('/form', async (req, res) => {
   try {
      console.log('Received form request:', req.body);
      
      const { name, email, comment } = req.body;

      if (!name || !email || !comment) {
         return res.status(400).json({ 
            error: 'Name, email and comment are required',
            received: { name, email, comment }
         });
      }

      const prismaFormRepository = new PrismaFormRepository();
      const nodemailerMailAdapterGoogle = new NodemailerMailAdapterGoogle();
      const submitFormService = new SubmitFormService(
         prismaFormRepository, 
         nodemailerMailAdapterGoogle
      );

      await submitFormService.execute({
         name, 
         email,
         comment
      });

      console.log('Form processed successfully');
      return res.status(201).json({ message: 'Form sent successfully' });
      
   } catch (error) {
      console.error('Error processing form:', error);
      return res.status(500).json({ 
         error: 'Internal server error',
         message: error instanceof Error ? error.message : 'Unknown error'
      });
   }
});