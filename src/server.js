const express = require('express')
const cors = require('cors') // Импортируем CORS

const app = express()
const port = 5000

app.use(cors()) // Используем CORS для разрешения запросов с другого домена

app.get('/ping', (req, res) => {
	res.json({ message: 'pong' })
})

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
