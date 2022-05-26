const express = require('express');
const { send } = require('process');

const app = express();
const port = '3000'

app.get('/', (req, res) => {
    res.send('salut le monde s')
})

app.listen(port, () => console.log(`Notre application application Node est bien demarée sur http:\\localhost : ${port}`))