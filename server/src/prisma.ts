import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';

// Garantir que as variáveis de ambiente sejam carregadas
dotenv.config();

// Verificar se a DATABASE_URL está definida
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

// Log para debug (sem expor dados sensíveis)
console.log('Initializing Prisma with URL length:', process.env.DATABASE_URL.length);

export const prisma = new PrismaClient({
   log: ['query', 'info', 'warn', 'error'],
   errorFormat: 'pretty',
   datasources: {
     db: {
       url: process.env.DATABASE_URL
     }
   }
})

// Test database connection on startup
prisma.$connect()
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((error) => {
    console.error('❌ Database connection failed:', error);
    console.error('DATABASE_URL:', process.env.DATABASE_URL ? 'exists' : 'missing');
  });