import axios from 'axios';
axios.defaults.baseURL = `${process.env.REACT_APP_API_BASE_URL}`;

export async function fetchRecipes() {
    try {
        const response = await axios.get('/recipes');
        return response;
    } catch (error: any) {
        return error.response
    }
}

export async function fetchRecipeByQuery(query: string) {
    try {
        const response = await axios.get(`/recipes?search=${query}`);
        return response;
    } catch (error: any) {
        return error.response
    }
}

export async function fetchRecipeById(id: string) {
    try {
        const response = await axios.get(`/recipes/${id}`);
        return response;
    } catch (error: any) {
        return error.response
    }
}

export async function fetchCategories() {
    try {
        const response = await axios.get('/category')
        return response
    } catch (error: any) {
        return error.response
    }
}

export async function fetchRecipesByCategory(category: string) {
    try {
        const response = await axios.get(`/category/${category}`)
        // const response = await axios.get(`/categories/${category}/recipes`)
        return response
    } catch (error: any) {
        return error.response
    }
}

export async function fetchRecipesByCategoryAndQuery(category: string, query: string) {
    try {
        const response = await axios.get(`/category/${category}/recipes?search=${query}`)
        return response
    } catch (error: any) {
        return error.response
    }
}

export async function postRating(id: string, rating: number) {
    try {
        const response = await axios.post(`/recipes/${id}/ratings`, {rating: rating})
        return response
    } catch (error: any) {
        return error.response
    }
}

export async function postComment(id: string, comment: object) {
    try {
        const response = await axios.post(`/recipes/${id}/comment`, {comment: comment})
        return response
    } catch (error: any) {
        return error.response
    }
}