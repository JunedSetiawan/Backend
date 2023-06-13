const express = require('express')
const cors = require('cors')
const SiswaRoute = require("./routes/SiswaRoute")
const path = require("path")
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', SiswaRoute)
app.use('/tes', function (req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
  });
  
  
app.listen(3001 || process.env.PORT, ()=>
    console.log(`Server ready at: http://localhost:3001`)
)