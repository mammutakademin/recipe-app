import express, { Request, Response, json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors'
// import dotenv from 'dotenv'

import recipeRouter from  './routes/recipe';
import categoryRouter from './routes/category'
connect('mongodb://localhost:27017/receptsajten')
const app = express()
app.use(json());
app.use(cors({origin: "http://localhost:3000"}));
const port = process.env.PORT || 4000

app.use('/recipes', recipeRouter);
// app.use('/search', recipeRouter);
app.use('/:id', recipeRouter);
app.use('/search/:recipeID', recipeRouter)

app.use('/', categoryRouter);
app.use('/category', categoryRouter);

//routes
app.get('/', (req: Request, res: Response) => {
    res.send('Server online!')
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});