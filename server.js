const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
const publicPath = path.join(__dirname, 'dist')

app.use(express.static(publicPath));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('*', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});