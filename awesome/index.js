const express = require('express')
const app = express()

console.log(`My env vars: ${JSON.stringify(process.env)}`)

let i = 0
setInterval(() => {
    console.log(i)
    i++
}, 1000 * 2)

app.get('/ping', (req, res) => {
    console.log('received ping')
    res.send('pong')
})
   
app.listen(3000)

module.exports = app