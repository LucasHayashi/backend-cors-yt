const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

dotenv.config();

const api_key = process.env.API_KEY;
const api_url = process.env.API_URL;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({msg: "Bem vindo!"})
});

app.get('/weather', async (req, res) => {
    const city_name = req.query.city_name;
    const response = await axios.get(`${api_url}/weather?key=${api_key}&city_name=${city_name}`)
    const data = response.data.results;

    res.json({info: data});
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})