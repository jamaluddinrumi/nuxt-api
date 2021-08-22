const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/api', (req, res) => {
  res.json({ url: req.url })
})

module.exports = app
