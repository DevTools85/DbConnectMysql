const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
  // Bağlantı başarılı olduğunda istemciye mesaj gönder
  app.get('/', async (req, res) => {
    res.send('Connected to MySQL database');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
