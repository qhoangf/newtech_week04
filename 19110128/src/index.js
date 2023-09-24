const express = require('express')
const app = express()
const port = 5000
const route = require('./routes');
const bodyParser = require('body-parser');

app.use(express.json())
app.use(bodyParser.json());
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})