const express = require('express');
const app = express();
const PORT = 8080;
var connectionCount = 0;

app.get('/', (req,res) => {
    console.log('new connection from IP: ' + req.ip);
    connectionCount++;
    res.send(`mobile app - connection count: ${connectionCount}`);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
