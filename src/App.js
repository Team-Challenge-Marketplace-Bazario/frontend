import React from 'react'

function App() {
	const handlePing = async () => {
		try {
			const response = await fetch('http://localhost:5000/ping') // Замените URL на ваш бекенд
			const data = await response.json()
			console.log('Response from /ping:', data)
		} catch (error) {
			console.error('Error fetching /ping:', error)
		}
	}

	return (
		<div>
			<h1>Hello, World!</h1>
			<button onClick={handlePing}>Send Ping</button>
		</div>
	)
}

export default App
