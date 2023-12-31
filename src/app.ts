import "dotenv/config";
import express from "express";
import cors from 'cors';
import { router } from "./routes";
import dbConnect from "./config/mongo"

const PORT = process.env.PORT || 3001
const app = express();

app.use(cors());

app.use(express.json());

app.use(router);


dbConnect().then(()=>{
    console.log(`Connection to Mongo is ready!`)
})
app.listen(PORT, ()=>{
    console.log(`Listen on port: ${PORT}`)
});


