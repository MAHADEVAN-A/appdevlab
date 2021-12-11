const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

require('./database')()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/',router)


app.listen(3000,()=>{
    console.log('Application running on port http://localhost:3000')
})