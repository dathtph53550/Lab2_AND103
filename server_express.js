const express = require('express')
const app = express()
const port = 3001

app.get('/home', (req, res) => {
  res.send('Trang Home')
  console.log("Vao trang home");
})

app.get('/', (req, res) => {
    res.send('Trang Chủ')
    console.log("Vao trang chủ");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})