import RecipeModel from "./models/recept";

export const getRecipes = async () => {
    const recipes = await RecipeModel.find();
    return recipes;
}

export const getRecipeById = async (recipeId: string) => {
    const recipes = await RecipeModel.findById({_id: recipeId});
    return recipes;
}

export const getRecipesBySearch = async (title: string) => {
    const foundRecipes = await RecipeModel.find({
        title: { $regex: title, $options: 'i'}
    })
    return foundRecipes;
}


// export const postRatingOnRecipe = async (_id: string, rating: number) => {
//     const recipe = await RecipeModel.findById(_id)
//         if (!recipe) {
//             throw '404'
//         } else {
//             recipe.ratings.push(rating)
//             await recipe.save()
//             return rating;
//         }
// }

export const postRatingOnRecipe = async (recipeId: string, rating: number) => {
    const recipe = await RecipeModel.findOneAndUpdate(
        { _id: recipeId },
        { $push: { ratings: rating } }
    )
}