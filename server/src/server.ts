import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import { routes } from './routes';

dotenv.config();

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

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    database: process.env.DATABASE_URL ? 'configured' : 'missing'
  });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
   console.log(`HTTP server running on port ${PORT}!`);
   console.log('DATABASE_URL configured:', !!process.env.DATABASE_URL);
});

 

/*...Anotações

   • [A] app.use(express.json())
   O express checa se há algum "corpo" na requisição em formato json, antes de processar o cadastro de feedbacks.
   Se o corpo existir, então transforma o json em objeto.

*/