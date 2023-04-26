import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import fs from "fs"
import multer from "multer"
import {Configuration, OpenAIApi} from "openai"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;
app.use(cors());
app.use(express.json())
app.post("/image", (req, res) =>{
    res.send("Bal")
})

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/v1/images/generations", async (req, res) => {
    try {
        const response = await openai.createImage({
          prompt: "A cute baby sea otter",
          n: 2,
          size: "1024x1024",
        })
        console.log(response.data.data);
        res.send(response.data.data)
    } catch (err) { 
        console.error(err)
    }
});

app.listen(PORT, () => console.log(`Server started on PORT Number ${PORT}`));