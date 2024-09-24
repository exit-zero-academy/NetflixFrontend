# Dockerfile עבור Netflix Frontend

# השתמש בתמונה הבסיסית של Node.js
FROM node:14

# הגדר את ספריית העבודה בקונטיינר
WORKDIR /app

# העתק את קבצי התלויות
COPY package*.json ./

# התקן את התלויות
RUN npm install

# העתק את שאר הקבצים לתוך הקונטיינר
COPY . .

# בניית הפרויקט
RUN npm run build

# הגדר את משתנה הסביבה עבור ה-API
ENV MOVIE_CATALOG_SERVICE=http://api:8080

# חשוף את הפורט שבו היישום יפעל
EXPOSE 3000

# הפעל את היישום
CMD ["npm", "start"]

