# Utiliser une image de Node officielle comme image de base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tous les fichiers locaux dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port de votre application

EXPOSE 1337

# Commande pour démarrer votre application
CMD ["npm", "run", "start"]
