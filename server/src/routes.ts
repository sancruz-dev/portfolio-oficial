import express from 'express'
import { NodemailerMailAdapter } from './contracts/nodemailer/NodemailerMailAdapter';
import { PrismaFeedbackRepository } from './res/prisma/PrismaFeedbacksRepository';
import { SubmitFeedbackService } from './services/SubmitFeedbackService';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
   const { type, comment, screenshot } = req.body;

   const prismaFeedbackRepository = new PrismaFeedbackRepository();

   const nodemailerMailAdapter = new NodemailerMailAdapter();

   const submitFeedbackService = new SubmitFeedbackService(
      prismaFeedbackRepository, nodemailerMailAdapter);

   await submitFeedbackService.execute({
      type,
      comment, 
      screenshot,
   });

   return res.status(201).send();
});







