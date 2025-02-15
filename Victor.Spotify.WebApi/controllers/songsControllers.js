import { db } from "../data-acess/connection.js";

export const getAllSongs = async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
};
