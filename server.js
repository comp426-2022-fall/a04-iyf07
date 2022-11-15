import roll from './lib/roll.js'
import express from 'express'
const app = express()
const port = 5555
// import minimist from 'minimist';

//
// const args = minimist(process.argv.slice(2))
// let s=args.sides;
// let d=args.dice;
// let r=args.rolls;
// const res = {sides: s, dice:d, rolls:roll(s,d,r)}
// console.log(JSON.stringify(res))

app.get('/app/', (req, res, next) => {
    console.log("200 OK")
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