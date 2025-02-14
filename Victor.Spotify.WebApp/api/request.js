import axios from "axios";

const url = "http://localhost:3001";

const responseSongs = await axios.get(`${url}/songs`);
const responseArtist = await axios.get(`${url}/artists`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

