const express = require('express')
const ejs = require('ejs')
const app = express()

const Home = require('./controllers/Home')
const CONFIG = require('./config')
// const posts = require('./module/data')
const { Post } = require('./module/Post')
const { IO } = require('./module/IO')
const file = new IO('./module/data.json')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

;(async () => {
	const postsFile = await file.read()
	const posts = JSON.parse(postsFile)

	app.get('/', (req, res) => {
		res.render('main', {posts})
	})

	app.get('/view/:id?', (req, res) => {
		const { id } = req.params

		const post = posts.find(d => d.id === (id - 0))
		
		if(Boolean(post)) {
			res.render('view', post)
		} else {
			res.status(404)
			res.redirect('/404').end()
		}
	})

	app.get('/create', (req, res) => {

		res.render('create')
	})

	app.post('/create', (req, res) => {
		const newPost = new Post(req.body)
		
		posts.push(newPost)
		// file.write(JSON.stringify(posts, null, 2))

		res.redirect('/')
	})

	app.get('/404', (_, res) => {
		res.render('404')
	})

})() //end of async

app.listen(CONFIG.PORT, () => console.log(`Ready at http://localhost:${CONFIG.PORT}`))
