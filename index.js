const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/data.json');


app.use(cors());


app.get('/', (req, res) => {
    res.send('Taste Master is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefs.find(n => n._id === id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`My server is running at port: ${port}`)
})