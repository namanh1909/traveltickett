const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

const app = express()

app.use(cors({
    credentials: true,
}))

mongoose.connect(process.env.MONGO_URL)
app.get('/test', (req, res) => {
    res.json('test ok')
})

mongoose.connect(process.env.MONGO_URL)

app.post('/register', (req, res) => {
    const { email, password, name } = req.body;
    res.json({ email, password, name });
})

app.listen(4000, () => console.log("sever running on port: localhost:4000 "))
