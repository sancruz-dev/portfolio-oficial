import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';

// Garantir que as variáveis de ambiente sejam carregadas
dotenv.config();

// Debug detalhado da DATABASE_URL
console.log('=== DATABASE URL DEBUG ===');
console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('DATABASE_URL length:', process.env.DATABASE_URL?.length || 0);

if (process.env.DATABASE_URL) {
  // Mostrar apenas as primeiras e últimas partes (esconder credenciais)
  const url = process.env.DATABASE_URL;
  const parts = url.split('@');
  console.log('URL starts with:', url.substring(0, 15));
  console.log('URL ends with:', url.substring(url.length - 15));
  console.log('Has @ symbol:', url.includes('@'));
  console.log('Has ://', url.includes('://'));
  
  // Verificar se tem todos os componentes básicos
  try {
    const urlObj = new URL(url);
    console.log('Protocol:', urlObj.protocol);
    console.log('Host:', urlObj.hostname || 'EMPTY');
    console.log('Port:', urlObj.port || 'DEFAULT');
    console.log('Pathname:', urlObj.pathname);
  } catch (e) {
    if (e instanceof Error) {
      console.error('Failed to parse URL:', e.message);
    } else {
      console.error('Failed to parse URL:', e);
    }
  }
}

// Construir DATABASE_URL se ela não existir ou estiver malformada
let databaseUrl = process.env.DATABASE_URL;

// Se a URL estiver malformada ou as variáveis PG existirem, reconstruir
if (!databaseUrl || databaseUrl.includes('empty host') || process.env.PGHOST) {
  const {
    PGUSER = 'postgres',
    PGPASSWORD,
    PGHOST,
    PGPORT = '5432',
    PGDATABASE = 'railway'
  } = process.env;

  console.log('=== PG VARIABLES ===');
  console.log('PGHOST:', PGHOST || 'MISSING');
  console.log('PGUSER:', PGUSER || 'MISSING');
  console.log('PGPASSWORD:', PGPASSWORD ? 'EXISTS' : 'MISSING');
  console.log('PGPORT:', PGPORT);
  console.log('PGDATABASE:', PGDATABASE);

  if (PGHOST && PGPASSWORD) {
    databaseUrl = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;
    console.log('✅ DATABASE_URL reconstructed from PG variables');
    console.log('New URL length:', databaseUrl.length);
  }
}

if (!databaseUrl) {
  throw new Error('DATABASE_URL or PostgreSQL environment variables are not defined');
}

console.log('Final DATABASE_URL length:', databaseUrl.length);
console.log('========================');

export const prisma = new PrismaClient({
   log: ['query', 'info', 'warn', 'error'],
   errorFormat: 'pretty',
   datasources: {
     db: {
       url: databaseUrl
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
    console.error('Final URL starts with:', databaseUrl?.substring(0, 15));
  });