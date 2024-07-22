import axios from "axios";

const HOTEL_API_URL = "http://localhost:8080/api/hotels";

class HotelService {
    getHotels(filterData) {
        return axios.post(`${HOTEL_API_URL}/searchHotels`, filterData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default new HotelService();
