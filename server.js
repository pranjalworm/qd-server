import express from 'express'
import cors from 'cors'

const port = 3000

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Quick & Dirty server')
})

app.listen(port, () => {
  console.log(`Quick & Dirty server is listening on port: ${port}`,)
})