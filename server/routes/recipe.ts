import express, {Request, Response} from 'express';
import RecipeModel from '../db/models/recept';
import {getRecipes, getRecipesBySearch, getRecipeById} from "../db/recipeCrud";

const recipeRouter = express.Router()

recipeRouter.get('/', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipes();
    res.status(200).json(returnRecipes);
});

recipeRouter.get('/search/:query', async (req: Request, res: Response) => {
    const queriedRecipes = await getRecipesBySearch(req.params.query);
    res.status(200).json(queriedRecipes);
});

recipeRouter.get('/:recipeId', async (req: Request, res: Response) => {
    const recipe = await getRecipeById(req.params.recipeId);
    res.status(200).json(recipe);
})

/* recipeRouter.post('/', async (req: Request, res: Response) => {
    const postRecipe = new RecipeModel({
        title: req.body.title,
        description: req.body.description,
        imageURL: req.body.imageURL,
        timeInMins: req.body.timeInMins,
        ratings: req.body.ratings,
        category: req.body.category,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        comments: req.body.comments
    })
    try {
        const savePostedRecipe = await postRecipe.save();
        res.json(savePostedRecipe);
    }catch(err) {
        res.json({message: err});
    }
}) */

export default recipeRouter;