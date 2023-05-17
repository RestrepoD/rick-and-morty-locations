import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";
export async function getLocationById(locId) {
  try {
    const res = await axios.get(`${baseUrl}/location/${locId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
