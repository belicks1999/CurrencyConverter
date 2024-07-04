import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import transferRoutes from './Routes/transferRoutes.js'

const port=3001;
const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/transfers', transferRoutes);


app.listen(port,()=>{

    console.log(`server is running on ${port}`);
})
