import axios from "axios";

const POST_API_URL = "http://localhost:8080/api/posts";

        
class PostService {
    async getAllPosts() {
        return await axios.get(POST_API_URL + "/getAllPosts").then((res) => {
            return res.data
        }).catch((error) => {
            console.error("Rrror fetching posts", error)
        })
    }
}

export default new PostService();
