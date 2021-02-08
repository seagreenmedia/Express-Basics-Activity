let express = require('express');
let app = express();
let port = 4000;
let bal = "750000";
let draw = "250";
let dep = "250000";

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/balance', (req, res) => {
    res.send(`Balance: $${bal}`);
});

app.get('/withdraw', (req, res) => {
    res.send(`Withdraw: $${draw}`);
});

app.get('/deposit', (req, res) => {
    res.send(`Balance: $${dep}`)
})