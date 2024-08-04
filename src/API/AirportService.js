import axios from "axios";

const AIRPORT_API_URL = "http://localhost:8080/api/airports";

class AirportService {
    getAirports(filterData) {
        return axios.post(`${AIRPORT_API_URL}/searchAirports`, filterData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default new AirportService();
