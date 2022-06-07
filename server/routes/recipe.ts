import express, {Request, Response} from 'express';
import { getRecipes, getRecipesBySearch, getRecipeById, postRatingOnRecipe } from "../db/recipeCrud";

const recipeRouter = express.Router()

// recipeRouter.get('/recipes', async (req: Request, res: Response) => {
recipeRouter.get('/', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipes();
    res.status(200).json(returnRecipes);
});

recipeRouter.get('/search/:query', async (req: Request, res: Response) => {
    const queriedRecipes = await getRecipesBySearch(req.params.query);
    res.status(200).json(queriedRecipes);
});

recipeRouter.get('/:recipeId', async (req: Request, res: Response) => {
    const queriedRecipeById = await getRecipeById(req.params.recipeId);
    res.status(200).json(queriedRecipeById);
})

recipeRouter.post('/:recipeId/ratings', async (req: Request, res: Response) => {
    const postedRating = await postRatingOnRecipe(req.params.recipeId, req.body.rating)
    res.status(200).json(postedRating)
})

export default recipeRouter;