const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const port = 4000
const host = "127.0.0.1"

const tempDir = path.join(__dirname, '/templates')

app.use(express.static(path.join(__dirname, '/static/')))

hbs.registerPartials(path.join(__dirname, `/templates/partials/`))
app.set('view engine', 'hbs')
app.set('views', `${tempDir}/views`)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found!</h1>')
})

app.listen(port, host, () => {
    console.log(`Server is running at ${host}:${port}`);
})