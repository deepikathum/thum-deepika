import express from 'express';
import movies from './Movies.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('internal server error')
});
app.get('/api/movies', (req,res)=>{
    res.json(movies)
});
const port = 5000;

app.listen(port,()=>{
    console.log(`server running on port:${port}`)
});