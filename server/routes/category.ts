import express, { Request, Response } from 'express';
import { getCategories, getRecipesByCategory, getRecipesBySearchCategory } from "../db/recipeCrud";

const router = express.Router()

/* router.get('/category', async (req: Request, res: Response) => { */
router.get('/', async (req: Request, res: Response) => {
    const categories = await getCategories();
    res.status(200).json(categories);
});

router.get('/:category', async (req: Request, res: Response) => {
    const queriedCategories = await getRecipesByCategory(req.params.category);
    console.log('Fetching Category Recipes', req.params.category);
    res.status(200).json(queriedCategories);
});

router.get('/:category/recipes', async (req: Request, res: Response) => {
    const recipessBySearchCategory = await getRecipesBySearchCategory(req.params.category);
    console.log('Fetching Recipe by Search Category', req.params.category)
    res.status(200).json(recipessBySearchCategory);
})

// router.get('/:category/:query', async (req: Request, res: Response) => {
//     const recipes = await getRecipesBySearchCategory(req.params.category, req.params.query);
//     res.status(200).json(recipes);
// });

export default router;