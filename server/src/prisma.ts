import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

// Função para validar e obter DATABASE_URL
function getDatabaseUrl(): string {
  let databaseUrl = process.env.DATABASE_URL;

  // Se DATABASE_URL não existir, tentar construir das variáveis PG
  if (!databaseUrl && process.env.PGHOST) {
    const {
      PGUSER = 'postgres',
      PGPASSWORD,
      PGHOST,
      PGPORT = '5432',
      PGDATABASE = 'railway'
    } = process.env;

    if (PGHOST && PGPASSWORD) {
      databaseUrl = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;
      console.log('✅ DATABASE_URL construída das variáveis PG');
    }
  }

  if (!databaseUrl) {
    throw new Error('DATABASE_URL ou variáveis PostgreSQL não estão definidas');
  }

  return databaseUrl;
}

// Configuração do Prisma otimizada para produção
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
  errorFormat: 'minimal',
  datasources: {
    db: {
      url: getDatabaseUrl()
    }
  }
});

// Configurar connection pool
prisma.$on('beforeExit', async () => {
  await prisma.$disconnect();
});

// Teste de conexão mais eficiente
async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Banco de dados conectado');
  } catch (error) {
    console.error('❌ Erro na conexão:', error);
    throw error;
  }
}

// Só testar conexão em desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  testConnection();
}