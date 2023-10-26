const express = require('express');
require('dotenv').config()
const axios = require("axios");
var cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is listening on PORT:", PORT);
});

app.get(`/`, async (_, res) => {
    try {
        const response = 'Welcome to NY Times'
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: err });
    }
})

app.get(`/home`, async (_, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.API_KEY}`);
        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
})