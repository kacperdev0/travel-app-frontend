import axios from "axios";

export const getPlaceById = async (placeId) => {
    const query = `
    [out:json];
    node(${placeId});
    out body;
  `;

  try {
    const response = await axios.post('https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query));
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Overpass API", error);
    return null;
  }
}