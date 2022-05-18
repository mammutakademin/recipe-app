import RecipeModel, { RecipeType } from "./models/recept";

export const getRecipes = async () => {
    const recipes = await RecipeModel.find();
    return recipes;
}

// export const getRecipesBySearch = async (query: any) => {
//     return await RecipeModel.find({"title" :{ '$regex' : query.search, '$options' : "i"}});
// }

export const getRecipesBySearch = async (title: string) => {
    const recipes = await RecipeModel.find({
        title: { $regex: title, $options: 'i'}
    })
    return recipes;
}

export const getRecipeById = async (recipeId: string) => {
    const recipe = await RecipeModel.find({_id: recipeId})
    return recipe
    // return await RecipeModel.find({"title" :{ '$regex' : recipeId.search, '$options' : "i"}});
}

//Category
export const getCategories = async () => {
    return await RecipeModel.find().distinct('category')
}

export const getRecipesCategory = async (category: string) => {
    const recipes = await RecipeModel.find({'category': category})
    return recipes
}

export const getRecipesBySearchCategory = async (category: string) => {
    const recipes = await RecipeModel.find({
        category: {$regex: category, $options: 'i'}
    })
    return recipes
}