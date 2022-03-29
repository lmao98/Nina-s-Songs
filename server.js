const express = require('express')
const db = require('./db')
const routes = require('./routes')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(`${__dirname}/client/build`))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/', routes)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })

db.once('open',() => {
    app.listen(PORT,() => {
        console.log('App listening')
    })
})