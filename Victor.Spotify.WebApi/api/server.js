import express from "express";
import cors from "cors";
import { db } from "./connection.js";

const app = express();
const port = 3001; 

app.use(cors());

app.listen(port, () => {
    console.log(`Servidor escutando na porta: ${port}`);
}); 

app.get('/', (req, res) => {
    res.send('Hello World 12');
});

app.get('/artists', async(req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
});

app.get('/songs', async(req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
});