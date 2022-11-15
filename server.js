import roll from './lib/roll.js'
import express from 'express'
const app = express()
import minimist from 'minimist';
const args = minimist(process.argv.slice(2))
var port = 5000;
if(args.port){
    port = args.port
}

//Encoded URI
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res, next) => {
    res.send("200 OK")
})

app.get('/app/roll/', (req, res, next) => {
    res.send(roll(-1,-1,-1))
})

app.get('/app/roll/:sides/', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides),-1,-1))
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides),parseInt(req.params.dice),-1))
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides),parseInt(req.params.dice),parseInt(req.params.rolls)))
})

app.get('*', (req, res) => {
    res.send("404 NOT FOUND");
});

app.post('/app/roll/', (req, res) => {
    res.send(parseInt(req.params.sides),parseInt(req.params.dice),parseInt(req.params.rolls));
});

app.listen(port)