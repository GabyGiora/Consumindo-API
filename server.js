const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios') // imagina que o axios é uma caixa e que dentro dele tem o fetch
                              // como no backend não tem o fetch a gente vai usar o axios 

app.use(cors())

app.get('/', async(req, res) => {

        try {
            // response é a resposta do axios mas eu tiro o data de dentro do response 
            const { data } = await axios('https://jsonplaceholder.typicode.com/users')
            console.log(data) // resposta no terminal

            return res.json(data) // pra mostrar o resultado do back no front
        
        } catch (error) {
            console.error(error) 
        }
})

app.listen('4567')