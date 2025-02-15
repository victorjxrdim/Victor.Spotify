import express from "express";
import cors from "cors";
import appsettings from "../appsettings.json" assert { type: "json"};

import { getAllArtists } from "../controllers/artistsController.js";
import { getAllSongs } from "../controllers/songsControllers.js";

const app = express();
const port = appsettings.Port;

app.use(cors());

app.listen(port, () => {
    console.log(`Servidor escutando na porta: ${port}`);
});

// #region Controllers
app.get('/artists', getAllArtists);
app.get('/songs', getAllSongs);
// #endregion