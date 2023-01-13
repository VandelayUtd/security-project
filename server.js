const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');


require('dotenv').config();

const PORT = 3000;

const app = express();

app.use(helmet());

app.get('/secret', (req, res) => {
    return res.send('your personal secrete value is 42')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})