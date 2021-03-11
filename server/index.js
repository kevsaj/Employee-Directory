const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?results=25&nat=us')
        .then(response => {
            res.send(response.data);
         });
});

app.listen(3000, () => {
    console.log('server started on port 3000');
});