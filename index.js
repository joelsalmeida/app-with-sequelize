const express = require('express');

const userController = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use('/user', userController);

const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));