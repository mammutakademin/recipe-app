import express, { Request, Response, json} from 'express';
import { connect } from 'mongoose';
connect('mongodb://localhost:27017/receptsajten')

import recipeRouter from  './routes/recipe';
// import categoryRouter from './routes/category'
// app.use(cors());
const app = express()
app.use(json());
const port = 4000

//routes
app.use('/recipes', recipeRouter);
// app.use('/category', categoryRouter);
app.use('/:id', recipeRouter);

// app.use('/search', recipeRouter);
// app.use('/', categoryRouter);
// app.use('/search/:recipeID', recipeRouter)


app.get('/', (req: Request, res: Response) => {
    res.send('RECIPE APP')
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});