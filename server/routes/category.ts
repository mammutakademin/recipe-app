import express, {Request, Response} from 'express';
import {getRecipes, getRecipesBySearch, getRecipeById} from "../db/recipeCrud";

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipes();
    res.status(200).json(returnRecipes);
});

router.get('/search/:query', async (req: Request, res: Response) => {
    const queriedRecipes = await getRecipesBySearch(req.params.query);
    res.status(200).json(queriedRecipes);
});

router.get('/:recipeId', async (req: Request, res: Response) => {
    const recipe = await getRecipeById(req.params.recipeId);
    res.status(200).json(recipe);
})

export default router;