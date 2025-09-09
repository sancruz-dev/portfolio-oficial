FROM node:18-slim

WORKDIR /app

# Instalar dependências do sistema
RUN apt-get update -y && apt-get install -y \
    openssl \
    libssl-dev \
    ca-certificates \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copiar package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies (incluindo devDependencies para build)
RUN npm ci --silent

# Generate Prisma Client APÓS copiar o schema
RUN npx prisma generate

# Copy application code
COPY . .

# Build application
RUN npm run build

# Remover devDependencies após build
RUN npm prune --production

# Generate novamente após build para garantir
RUN npx prisma generate

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:${PORT:-3333}/health || exit 1

EXPOSE 3333

# Start command sem --skip-generate
CMD ["sh", "-c", "npx prisma db push --accept-data-loss && npm start"]