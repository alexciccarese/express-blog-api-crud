const express = require('express')
const app = express()
const port = 3003
const postsRouter = require('./routers/posts')

//rgistro il body-parsr pr "application/jason"
app.use(express.json())

app.post("/", (req, res) => {
  //dentro req.body troveremo
  //i dati ricevuti in formato json
  console.log(req.body);
  
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})

app.get('/', (req, res) => {
  
  res.send('Server del mio blog')
})

app.use("/posts", postsRouter)