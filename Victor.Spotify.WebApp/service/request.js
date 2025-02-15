import axios from "axios";
import appsettings from "../../Victor.Spotify.WebApi/appsettings.json" assert { type: "json"};

const url = appsettings.Url.toString();

//#region Consuming API
const responseSongs = await axios.get(`${url}/songs`);
const responseArtist = await axios.get(`${url}/artists`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;
//#endregion

