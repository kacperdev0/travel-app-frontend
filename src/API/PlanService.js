import axios from "axios";

const PLAN_API_URL = "http://localhost:8080/api/protected/plan";

        
class PlanService {
    savePlan(data) {
        return axios.post(`${PLAN_API_URL}/savePlan`, data, {
            withCredentials: true, 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.data.elements || []
          })
    }

    overwritePlan(data) {
        return axios.post(`${PLAN_API_URL}/overwritePlan`, data, {
            withCredentials: true, 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.data.elements || []
          })
    }
    
    async getPlans() {
        return await axios.post(`${PLAN_API_URL}/getPlans`, {}, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res || []
          })
    }

    togglePlanPublicity(id) {
        return axios.post(`${PLAN_API_URL}/togglePublicity/${id}`, null, {
            withCredentials: true, 
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default new PlanService();
