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

RUN npx prisma generate

COPY . .

# Agora o tsc estará disponível
RUN npm run build

# Opcional: remover devDependencies após build para otimizar
RUN npm prune --production

EXPOSE 3333

CMD ["sh", "-c", "npx prisma db push --accept-data-loss && npm start"]