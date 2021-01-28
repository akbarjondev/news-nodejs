const express = require('express')
const app = express()

const Home = require('./src/Controllers/Home')

const CONFIG = require('./src/config')

app.get('/', Home.GET)

app.listen(CONFIG.PORT, () => console.log(`Ready at http://localhost:${CONFIG.PORT}`))
