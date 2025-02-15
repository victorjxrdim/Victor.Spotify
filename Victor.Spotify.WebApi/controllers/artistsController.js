import { db } from "../data-acess/connection.js";

export const getAllArtists = async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
};