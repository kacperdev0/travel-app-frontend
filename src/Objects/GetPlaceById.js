import axios from "axios";

export const getPlaceById = async (placeId) => {
  // Construct the Overpass API query
  const query = `
    [out:json];
    node(${placeId});
    out body;
  `;

  try {
    // Send a GET request to the Overpass API with the query encoded in the URL
    const response = await axios.get('https://overpass-api.de/api/interpreter', {
      params: {
        data: query,
      }
    });

    // Return the data received from the API
    console.log(response.data.elements[0])
    return response;
  } catch (error) {
    // Log the error and return null if the request fails
    console.error("Error fetching data from Overpass API", error);
    return null;
  }
}
