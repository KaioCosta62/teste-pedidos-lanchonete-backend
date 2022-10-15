const express = require('express')
const db = require('./database/db')
const routes = require('./routes/routes')

// Inicializando o express
const app = express()

// Conexão com banco de dados
db.connect()

// Definindo as rotas
app.use('/api', routes)

// Habilita o server para receber json
app.use(express.json())

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})