const express = require('express');
const app = express();
if (process.env.NODE_ENV !== "production") {
    const dotenv = require('dotenv');
    dotenv.config();
}

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/status', (req, res) => res.status(200).send('ok'))
app.use(require('./routes'));

app.listen(process.env.PORT, () => console.log(`Started server. Listening on ${process.env.PORT}`));
