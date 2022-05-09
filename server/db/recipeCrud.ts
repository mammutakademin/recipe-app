import RecipeModel, { RecipeType } from "./models/recept";

export const getRecipes = async () => {
    const recipes = await RecipeModel.find();
    return recipes;
}
