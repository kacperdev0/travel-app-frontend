import axios from "axios";

const HOTEL_API_URL = "http://localhost:8080/api/hotels";

class HotelService {
    getHotels(location) {
        const data = {
            latitude: location[0],
            longitude: location[1],
          };
          console.log(data)
        return axios.post(`${HOTEL_API_URL}/searchHotels`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data.elements);
            return res.data.elements || []
          })
        .catch((error) => {
            console.error('Error fetching hotels:', error);
            return [];
        });
    }
}

export default new HotelService();
