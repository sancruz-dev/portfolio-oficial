import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import { routes } from './routes';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
      "https://sancruz.vercel.app",
      "http://localhost:3333",
      "*"
   ], // ou "*" apenas para testes
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
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