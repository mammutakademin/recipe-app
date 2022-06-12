import RecipeModel from "./models/recept";

export const getCategories = async () => {
    // return await RecipeModel.find().distinct('category')
    const categories = await RecipeModel.aggregate([
        { $match: {} },
        { $unwind: '$category' },
        { $group: { _id: '$category', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]);
    return categories;
}

export const getRecipesByCategory = async (category: string) => {
    // const recipes = await RecipeModel.find({category: category})
    const recipes = await RecipeModel.find( { category: { $all: ["red", "blank"] } } )
    
    console.log('Fetch Recipes by Category', recipes);
    return recipes
}

export const getRecipesBySearchCategory = async (category: string) => {
    const recipes = await RecipeModel.find({
        category: {$regex: category, $options: 'i'}
    })
    return recipes
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
