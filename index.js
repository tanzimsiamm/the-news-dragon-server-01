const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

const catagories = require('./data/catagories.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/catagories', (req, res) => {
  res.send(catagories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})