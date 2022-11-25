import express from 'express'
import { NodemailerMailAdapter } from './contracts/nodemailer/NodemailerMailAdapter';
import { NodemailerMailAdapterGoogle } from './contracts/nodemailer/NodemailerMailAdapterGoogle';
import { PrismaFeedbackRepository } from './res/prisma/PrismaFeedbacksRepository';
import { SubmitFeedbackService } from './services/SubmitFeedbackService';

import { PrismaFormRepository } from './res/prisma/PrismaFormsRepository';
import { SubmitFormService } from './services/SubmitFormService';

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

routes.post('/form', async (req, res) => {
   const { name, email, comment } = req.body;

   const prismaFormRepository = new PrismaFormRepository();

   const nodemailerMailAdapterGoogle = new NodemailerMailAdapterGoogle();

   const submitFormService = new SubmitFormService(
      prismaFormRepository, nodemailerMailAdapterGoogle);

   await submitFormService.execute({
      name, 
      email,
      comment
   });

   return res.status(201).send();
});







