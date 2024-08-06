import axios from "axios";

const HOTEL_API_URL = "http://localhost:8080/api/hotels";

class HotelService {
    getHotels(location) {
        const data = {
            latitude: location[0],
            longitude: location[1],
          };
        return axios.post(`${HOTEL_API_URL}/searchHotels`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return (res.data.elements || [])
          })
        .catch((error) => {
            console.error('Error fetching hotels:', error);
        });
    }
}

export default new HotelService();
