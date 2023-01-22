import express from "express";
const app = express();
import connect from "./db/conn.js";
import router from "./routes/router.js";
import cors from 'cors';
import path from "path";
import cookieParser from "cookie-parser";
// import dirname  from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const port = process.env.port || 8009


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);


// serving the frontend

app.use(express.static(path.join(__dirname, "./client/build")))

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err)
        }

    )
})

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})