const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/page2', (req, res) => {
    res.send('Page Two')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})