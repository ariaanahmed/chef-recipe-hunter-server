const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors')

app.get('/', (req, res) => {
    res.send('server is running')
})

app.use(cors());

app.listen(port, () => {
    console.log(`server is live at port: ${port}`)
})