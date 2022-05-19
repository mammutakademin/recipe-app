import express, {Request, Response} from 'express';
import { getCategories, getRecipesCategory, getRecipesBySearchCategory } from "../db/recipeCrud";

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const returnCategories = await getCategories();
    res.status(200).json(returnCategories);
});

router.get('/:category', async (req: Request, res: Response) => {
    const queriedCategories = await getRecipesCategory(req.params.category);
    res.status(200).json(queriedCategories);
});

router.get('/:categoryName/recipes', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesBySearchCategory(req.params.categoryName);
    res.status(200).json(returnRecipes);
})

export default router;