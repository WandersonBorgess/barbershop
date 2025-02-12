import express from 'express';
const router = express.Router();
import Hall from '../models/hall'

router.post('/', async (req, res) => {
  try {
    const hall = await new Hall(req.body).save()
    res.json({ hall })
  } catch (err: any) {
    res.json({ error: true, message: err.message})
  }
})

export default router