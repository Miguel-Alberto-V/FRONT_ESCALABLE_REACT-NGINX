FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Usa `serve` para desplegar la carpeta `build` en producción
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]