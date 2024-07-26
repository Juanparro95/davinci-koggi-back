/**
 * Prueba Backend Node JS
 * autor: Juan David Parroquiano Vargas
 * date: 16/07/2024
 */
const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./app/routes/authRoutes')
const taskRoutes = require('./app/routes/taskRoutes')
const port = 3000 // Asignamos por defecto el puerto 3000

const app = express()
app.use(bodyParser.json())

app.use('/auth', authRoutes)
app.use('/task', taskRoutes)

// Ruta Raiz
app.get('/', (req, res) => {
    res.json({
        message: 'Hola, mundo'
    });
})

// Listen
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})