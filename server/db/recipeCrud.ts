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

export const getCategories = async () => {
    return await RecipeModel.find().distinct('category')
}


export const getRecipeById = async (recipeId: string) => {
    return await RecipeModel.find({"title" :{ '$regex' : recipeId.search, '$options' : "i"}});
}
