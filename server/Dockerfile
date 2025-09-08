# Use imagem oficial do Node.js com Debian (melhor compatibilidade com Prisma)
FROM node:18-slim

WORKDIR /app

# Instala dependências necessárias para o Prisma
RUN apt-get update -y && apt-get install -y \
    openssl \
    libssl-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copia arquivos de configuração
COPY package*.json ./
COPY prisma ./prisma/

# Instala TODAS as dependências primeiro (incluindo dev)
RUN npm install

# Gera o cliente Prisma
RUN npx prisma generate

# Copia o resto do código
COPY . .

# Builda a aplicação
RUN npm run build

# Remove dependências de desenvolvimento para otimizar
RUN npm prune --production

# Expõe a porta
EXPOSE 3333

# Inicia a aplicação
CMD ["npm", "start"]