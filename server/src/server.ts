import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import { routes } from './routes';

// Carregar variáveis de ambiente ANTES de qualquer importação do Prisma
dotenv.config();

// Log para debug da DATABASE_URL (sem mostrar a URL completa por segurança)
console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('DATABASE_URL length:', process.env.DATABASE_URL?.length || 0);

const app = express();

// CORS aberto temporariamente para debugging
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"]
}));

app.use(express.json()); // [A]

// Log middleware para debug
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Body:`, req.body);
  next();
});

app.use(routes);

// Health check melhorado
app.get('/health', (req, res) => {
  const dbStatus = process.env.DATABASE_URL ? 
    (process.env.DATABASE_URL.includes('://') ? 'configured' : 'malformed') : 
    'missing';
    
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    database: dbStatus,
    env: process.env.NODE_ENV || 'development'
  });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
   console.log(`HTTP server running on port ${PORT}!`);
   console.log('Environment:', process.env.NODE_ENV || 'development');
   console.log('DATABASE_URL configured:', !!process.env.DATABASE_URL);
});

/*...Anotações

   • [A] app.use(express.json())
   O express checa se há algum "corpo" na requisição em formato json, antes de processar o cadastro de feedbacks.
   Se o corpo existir, então transforma o json em objeto.

*/