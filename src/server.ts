import express from 'express'
import { Request, Response } from "express"
import { myDataSource } from './db/DbConfig'
import cors from 'cors'
import session from 'express-session'
// import passport from './passport';
import flash from 'express-flash';
import { json, urlencoded } from 'body-parser';
import 'dotenv/config';

// myDataSource
//     .initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!");
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization:", err);
//     })

const app: express.Express = express()
const port: number = Number(process.env.PORT) || 3000;

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))




app.get("/", (req: Request, res: Response) => {
  console.log("Listining Port :)....")
  res.status(200).json({"message": "GET Request is OK :)"})
})

app.use(session({
  secret: "0.75feet pumpkin castle",
  resave: true,
  saveUninitialized: true,
}))

app.use(flash());
// app.use(passport.initialize())
// app.use(passport.session())
const articleRouter: express.Router = require('./routes/Article')
app.use('/article', articleRouter)
console.log('intialize Ok')

app.listen(port, () => {
  console.log(`Start server port: ${port}`)
})
