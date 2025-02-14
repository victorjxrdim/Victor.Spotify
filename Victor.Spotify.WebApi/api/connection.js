import { MongoClient } from "mongodb";

const url = "mongodb+srv://victorhjardim:ellhGSUSAzYR50qJ@cluster0.15dch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(url);

export const db = client.db("spotify-web-app");