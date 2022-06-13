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

export const getCategories = async () => {
    const categories = await RecipeModel.aggregate([
        { $match: {} },
        { $unwind: '$category' },
        { $group: { _id: '$category', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]);
    return categories;
}

export const getRecipesByCategory = async (category: string) => {
    const recipes = await RecipeModel.find({category: category})
    console.log('Fetch Recipes by Category', recipes);
    return recipes;
}

// export const getRecipesBySearchCategory = async (category: string) => {
//     const recipes = await RecipeModel.find({
//         category: {$regex: category, $options: 'i'}
//     })
//     return recipes
// }

export const getRecipesBySearchCategory = async (params: string, search: any) => {
    const recipes = await RecipeModel.find({
        category: params,
        title: {$regex: search, $options: 'i'}
    });
    return recipes;
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