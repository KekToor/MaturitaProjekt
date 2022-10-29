const path = require('path');
// const http = require('http');
// const https = require('https');
const express = require('express');
const app = express();
// const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/learnit_api', (req, res) =>{
    res.send({ express: 'Backend successfully connected to react'});
});
