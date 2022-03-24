const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.resolve(__dirname, '../static/index.html'))

    }, 3000)
})

app.use(express.static(path.resolve(__dirname, '../static')))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
