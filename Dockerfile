# Usa a imagem oficial do Node.js 18
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências primeiro
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante dos arquivos do projeto
COPY . .

# Expõe a porta 3000 (ou a porta que sua API usa)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
