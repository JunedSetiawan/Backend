const express = require('express')
const cors = require('cors')
const SiswaRoute = require("./routes/SiswaRoute")
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', SiswaRoute)  
  
app.listen(3001 || process.env.PORT, ()=>
    console.log(`Server ready at: http://localhost:3001`)
)