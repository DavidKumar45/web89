const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(require('./routes'));

app.listen(process.env.PORT, () => console.log(`Started server. Listening on ${process.env.PORT}`));
