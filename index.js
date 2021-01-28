const express = require('express')
const app = express()

const CONFIG = require('./config')
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('main', {data: 'Ali'})
})

app.listen(CONFIG.PORT, () => console.log(`Ready at http://localhost:${CONFIG.PORT}`))
