# Use Node.js 18 com Alpine Linux (mais leve e seguro)
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Instala dependências do sistema necessárias
# OpenSSL: necessário para o Prisma
# ca-certificates: para conexões HTTPS seguras
RUN apk add --no-cache \
    openssl \
    ca-certificates \
    && rm -rf /var/cache/apk/*

# Copia arquivos de configuração do npm primeiro (para cache de layer)
COPY package*.json ./

# Copia o schema do Prisma
COPY prisma ./prisma/

# Instala dependências de produção
# --only=production: instala apenas dependências de produção
# --frozen-lockfile: usa exatamente as versões do package-lock.json
RUN npm ci --only=production --frozen-lockfile

# Gera o cliente Prisma após instalar dependências
RUN npx prisma generate

# Copia o resto do código fonte
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Remove arquivos desnecessários para produção
RUN rm -rf src/ \
    && rm -rf node_modules/@types \
    && rm -rf *.ts \
    && npm prune --production

# Cria usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Muda para o usuário não-root
USER nextjs

# Expõe a porta que a aplicação vai usar
EXPOSE 3333

# Define variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3333

# Comando para iniciar a aplicação
CMD ["npm", "start"]