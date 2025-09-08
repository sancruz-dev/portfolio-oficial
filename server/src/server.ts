import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import { routes } from './routes';

dotenv.config();

const app = express();

// CORS configurado para produção
app.use(cors({
  origin: [
    "https://sancruz.vercel.app",
    "https://portfolio-oficial-web.vercel.app", 
    "http://localhost:3222",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  credentials: true
}));

app.use(express.json());// [A]...
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
   console.log('HTTP server running! OK');
}); 


 

/*...Anotações

   • [A] app.use(express.json())
   O comando acima, diz ao express para checar se há algum "corpo" na requisição em formato json, antes de processar o cadastro de feedbacks. Se o corpo existir, então transforma o json em objeto.

   • [B] async await
   Faz com que o express espere a operação do banco ser finalizada, para então ser retornado uma resposta ao frontend.
*/