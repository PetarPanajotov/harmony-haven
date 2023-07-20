const  express = require('express');
const cors = require('cors');

const app = express();
const port = 3030;

app.use(cors())

app.get('/products', function (req, res, next) {
    res.json({msg: 'data'})
  })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})