const express = require('express')
const app = express()
const port = 3003
const postsRouter = require('./routers/posts')

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})

app.get('/', (req, res) => {
  
  res.send('Server del mio blog')
})

app.use("/posts", postsRouter)