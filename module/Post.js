class Post {

	id
	title
	text
	date

	constructor({ title, text, date }) {
		this.id = (new Date).getTime()
		this.title = title
		this.text = text
		this.date = date
	}

}

module.exports.Post = Post
