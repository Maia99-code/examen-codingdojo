import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getComics, getComic, createComic, updateComic, deleteComic } from '../controllers/comics.controller.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import { createComicSchema } from '../schemas/comic.schema.js'


const router = Router()

router.get('/comics', authRequired, getComics)
router.get('/comics/:id', authRequired, getComic)
router.post('/comics', authRequired, validateSchema(createComicSchema), createComic)
router.delete('/comics/:id', authRequired, deleteComic)
router.put('/comics:/id', authRequired, updateComic)

export default router