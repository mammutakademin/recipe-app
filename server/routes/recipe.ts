import express, {Request, Response} from 'express';

import {getRecipes} from "../db/recipeCrud";

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipes();
    res.status(200).json(returnRecipes)
});

export default router;