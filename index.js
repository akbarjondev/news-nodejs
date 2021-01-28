const express = require('express')
const ejs = require('ejs')
const app = express()

const Home = require('./controllers/Home')
const CONFIG = require('./config')
const posts = require('./module/data')


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
	res.render('main', {posts})
})


app.get('/view/:id?', (req, res) => {
	const { id } = req.params
	const post = posts.find(d => d.id === (id - 0))
	res.render('view', post)
})

app.listen(CONFIG.PORT, () => console.log(`Ready at http://localhost:${CONFIG.PORT}`))
