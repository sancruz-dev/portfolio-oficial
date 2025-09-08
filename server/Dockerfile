FROM node:18-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y \
    openssl \
    libssl-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci --only=production
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 3333

# Criar tabelas no startup e iniciar
CMD ["sh", "-c", "npx prisma db push --accept-data-loss && npm start"]