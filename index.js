import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import postsRouter from "./routes/postsRoutes.js";
import path from "path"
import { fileURLToPath } from 'url';


const app = express();

app.use(express.json())
 
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 7400;

app.use("/posts", postsRouter);

const connection = () => { mongoose.connect(CONNECTION_URL, {
    useNewurlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB!")
}).catch((err) => {
    console.log(err);
})}

// serving the frontend
const __filename = fileURLToPath(import.meta.url);
app.use(express.static(path.join(__filename, "../client/build")))

app.get("*", function(_,res) {
    res.sendFile(
        path.join(__filename, "../client/build/index.html"),
        function(err){
            res.status(500).send(err)
        }
    )
})

connection();

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`)
})
