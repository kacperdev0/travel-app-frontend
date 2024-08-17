class PlanData {
    constructor(hotel = null, airportDeparture = null, airportArrival = null, step = 1) {
        this._hotel = hotel;
        this._airportDeparture = airportDeparture;
        this._airportArrival = airportArrival;
        this._step = step;
    }

    get hotel() {
        return this._hotel;
    }

    get airportDeparture() {
        return this._airportDeparture;
    }

    get airportArrival() {
        return this._airportArrival;
    }

    get step() {
        return this._step;
    }

    set hotel(value) {
        this._hotel = value;
    }

    set airportDeparture(value) {
        this._airportDeparture = value;
    }

    set airportArrival(value) {
        this._airportArrival = value;
    }

    set step(value) {
        if (typeof value === 'number' && value > 0) {
            this._step = value;
        } else {
            console.log('Step must be a positive number.');
        }
    }
}