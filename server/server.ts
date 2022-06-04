import express, { Request, Response, json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'

import recipeRouter from  './routes/recipe';
import categoryRouter from './routes/category'

dotenv.config()

const url = "mongodb+srv://EdithaITHS:kE1u6b87IhX0ioVx@receptsajten.ap0c6.mongodb.net/?retryWrites=true&w=majority";

connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
    })
// connect('mongodb://localhost:27017/receptsajten')
const app = express()
app.use(json());
app.use(cors({origin: "http://localhost:3000"}));
const port = process.env.PORT || 4000

app.get('/', (req: Request, res: Response) => {
    res.send('Server online!')
});

//routes
app.use('/recipes', recipeRouter);
app.use('/category', categoryRouter);

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});