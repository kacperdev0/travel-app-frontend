import axios from "axios";

export const getPlaceById = async (placeId) => {
  const query = `
    [out:json];
    node(${placeId});
    out body;
  `;

  try {
    const response = await axios.get('https://overpass-api.de/api/interpreter', {
      params: {
        data: query,
      }
    });
    return response.data.elements[0];
  } catch (error) {
    console.error("Error fetching data from Overpass API", error);
    return null;
  }
}
