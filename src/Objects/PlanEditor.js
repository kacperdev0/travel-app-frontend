class PlanEditor {
    constructor() {
        this.plan = []
    }

    addLocation(location) {
        this.plan.push(location)
    }

    getPlan() {
        return this.plan
    }

    getPlanJSON() {
        return JSON.stringify(this.plan)
    }
}