import RecipeModel from "./models/recept";

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
    return recipes
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
    return recipes
}
