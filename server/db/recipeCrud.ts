import RecipeModel from "./models/recept";
// import RecipeModel, { RecipeType } from "./models/recept";

export const getRecipes = async () => {
    const recipes = await RecipeModel.find();
    return recipes;
}

export const getRecipeById = async (recipeId: string) => {
    const recipes = await RecipeModel.find({_id: recipeId})
    return recipes
    // return await RecipeModel.find({"title" :{ '$regex' : recipeId.search, '$options' : "i"}});
}

export const getRecipesBySearch = async (title: string) => {
    const foundRecipes = await RecipeModel.find({
        title: { $regex: title, $options: 'i'}
    })
    return foundRecipes;
}

//Category
export const getCategories = async () => {
    return await RecipeModel.find().distinct('category')
}

export const getRecipesByCategory = async (category: string) => {
    const recipes = await RecipeModel.find({'category': category})
    return recipes
}

export const getRecipesBySearchCategory = async (category: string) => {
    const recipes = await RecipeModel.find({
        category: {$regex: category, $options: 'i'}
    })
    return recipes
}

export const postRatingOnRecipe = async (_id: string, rating: number) => {
    const recipe = await RecipeModel.findById(_id)
        if (!recipe) {
            throw '404'
        } else {
            recipe.ratings.push(rating)
            await recipe.save()
            return rating;
        }
}