const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use([morgan('dev'), cors(), express.json()])


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Wellcome Home Page !"
    })
})



app.listen(4000, () => {
    console.log("server in runing this port 4000");
})