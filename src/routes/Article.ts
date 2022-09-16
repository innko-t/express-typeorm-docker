import express from 'express'
import { Request, Response } from "express"
import { myDataSource } from '../db/DbConfig'
import Article from '../db/entity/article'


const router: express.Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  console.log("User Get /user")
  res.send('This is in Rouer of User:)')
})

router.post('/', async (req: Request, res: Response) => {
  console.log("Try Register Article Start")
  const article: Article = new Article (req.body.title, req.body.description, req.body.publishDate)
  try {
    await myDataSource.getRepository(Article).save(article);
  } catch (e) {
    res.status(409).json({"error":"Cannnot register Article", "raw":e});
    return;
  }
  res.send('Register Article Success :)')
})

module.exports = router