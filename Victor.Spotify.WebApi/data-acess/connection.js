import appsettings from "../appsettings.json" assert { type: "json"};
import { MongoClient } from "mongodb";

// #region Create Connection with Database
const url = appsettings.ConnectionString.MongoDbString;

const client = new MongoClient(url);

export const db = client.db("spotify-web-app");
//#endregion 