import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import games from './game'

const app = express()
app.use(cors())

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  }),
)

app.get('/', async (req, res) => {
  res.send('health-check')
})

app.post('/moves', async (req, res) => {
  const message = await games(req.body?.moves)
  res.send(message)
})

app.listen(4000, () => {
  console.log(`app is listening to port 4000`)
})
