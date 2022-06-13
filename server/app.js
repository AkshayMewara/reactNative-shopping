const express = require('express');
require('./src/database/connection')
const cors = require('cors')
const router = require('./src/routes/user')

const app = express()
const port = 8000
app.use(cors())
app.get("/", async ( req, res ) => {
    res.send("welcome to shopping")
})
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`connection is live at port ${port}`)
})