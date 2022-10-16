const express = require('express')
const db = require('./database/db')
const cors = require('cors')
const routes = require('./routes/routes')

// Inicializando o express
const app = express()

// Configurando o servidor para receber request
app.use(cors())

// Configurando o servidor para aceitar requests
// Conexão com banco de dados
db.connect()

// Habilita o server para receber json
app.use(express.json())

// Definindo as rotas
app.use('/api', routes)

// Iniciando o servidor
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})