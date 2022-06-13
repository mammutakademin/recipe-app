import { Schema, model } from 'mongoose';

export interface RecipeType {
    title: string,
    description: string,
    imageURL: string,
    timeInMins: number,
    ratings: [Number],
    category: [String],
    ingredients: [{ingredient: string, amount: number, unit: string}],
    instructions: [{instruction: string, order: number}],
    comments?: [{comment: string, name: string, createdAt: Date}]
}

const schema = new Schema<RecipeType>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    timeInMins: { type: Number, required: true },
    ratings: { type: [Number], required: true },
    category: { type: [String], required: true },
    ingredients: { type: [Object], required: true },
    instructions: { type: [Object], required: true },
    comments: { type: [Object], required: false }
})

const RecipeModel = model<RecipeType>('Recipe', schema)

export default RecipeModel;