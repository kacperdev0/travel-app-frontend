import axios from "axios";

const AIRPORT_API_URL = "http://localhost:8080/api/airports";

class AirportService {
    getAirports(location) {
        const data = {
            latitude: location[0],
            longitude: location[1],
          };
          return axios.post(`${AIRPORT_API_URL}/searchAirports`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.data.elements || []
          })
        .catch((error) => {
            console.error('Error fetching airports:', error);
            return [];
        })
    }
}

export default new AirportService();
