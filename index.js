const express = require('express')
const ejs = require('ejs')
const app = express()

const Home = require('./controllers/Home')
const CONFIG = require('./config')
const posts = require('./module/data')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.render('main', {posts})
})

app.get('/view/:id?', (req, res) => {
	const { id } = req.params

	const post = posts.find(d => d.id === (id - 0))
	
	if(Boolean(post)) {
		res.render('view', post).end()
	} else {
		res.status(404)
		res.redirect('/404').end()
	}
})

app.get('/create', (req, res) => {
	res.render('create')
})

app.post('/create', (req, res) => {
	console.log(req.body)
	res.redirect('/')
})

app.get('/404', (_, res) => {
	res.render('404')
})

app.listen(CONFIG.PORT, () => console.log(`Ready at http://localhost:${CONFIG.PORT}`))
