import roll from './lib/roll.js'
import express from 'express'
const app = express()
import minimist from 'minimist';
const args = minimist(process.argv.slice(2))
var port = 5000;
if(args.port){
    port = args.port
}

app.get('/app/', (req, res, next) => {
    res.send("200 OK")
})

app.get('/app/roll/', (req, res, next) => {
    res.send(roll(-1,-1,-1))
})

app.get('/app/roll/:sides/', (req, res, next) => {
    res.send(roll(req.params.sides,-1,-1))
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
    res.send(roll(req.params.sides,req.params.dice,-1))
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
    res.send(roll(req.params.sides,req.params.dice,req.params.rolls))
})

app.get('*', (req, res) => {
    res.send("404 NOT FOUND");
});

app.listen(port)