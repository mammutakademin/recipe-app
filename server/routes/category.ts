import express, { Request, Response } from 'express';
import { getCategories, getRecipesByCategory, getRecipesBySearchCategory } from "../db/recipeCrud";

const router = express.Router()

router.get('/category', async (req: Request, res: Response) => {
// router.get('/', async (req: Request, res: Response) => {
    const recipes = await getCategories();
    res.status(200).json(recipes);
});

router.get('/:category', async (req: Request, res: Response) => {
    const queriedCategories = await getRecipesByCategory(req.params.category);
    res.status(200).json(queriedCategories);
});

router.get('/search/:query', async (req: Request, res: Response) => {
    const recipes = await getRecipesBySearchCategory(req.params.query);
    res.status(200).json(recipes);
});

// router.get('/:categoryName/recipes', async (req: Request, res: Response) => {
//     const categoriesBySearch = await getRecipesBySearchCategory(req.params.categoryName);
//     res.status(200).json(categoriesBySearch);
// })

export default router;