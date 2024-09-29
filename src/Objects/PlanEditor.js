import { useState } from "react"

const PlanEditor = () => {
    const [plans, setPlans] = useState([{name: "hotel"}])

    const addLocation = (location) => {
        setPlans([...plans, location])
    }

    return {
        plans,
        addLocation,
    }
}

export default PlanEditor