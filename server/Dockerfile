FROM node:18-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y \
    openssl \
    libssl-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY prisma ./prisma/

# Usar npm ci (não --only=production) para ter acesso ao TypeScript
RUN npm ci

# Gerar o Prisma Client
RUN npx prisma generate

COPY . .

# Agora o tsc estará disponível
RUN npm run build

# Opcional: remover devDependencies após build para otimizar
RUN npm prune --production

EXPOSE 3333

# Executar migrations e depois iniciar o servidor
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]