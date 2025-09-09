FROM node:18-slim

WORKDIR /app

# Instalar dependências do sistema
RUN apt-get update -y && apt-get install -y \
    openssl \
    libssl-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copiar arquivos de dependência
COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependências
RUN npm ci --only=production

# Gerar Prisma Client
RUN npx prisma generate

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Limpar cache do npm
RUN npm cache clean --force

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

# Alterar ownership
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expor porta
EXPOSE 3333

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3333/health || exit 1

# Comando de inicialização mais robusto
CMD ["sh", "-c", "npx prisma db push --accept-data-loss --force-reset && npm start"]