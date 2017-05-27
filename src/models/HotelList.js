export default class HotelList {

    constructor() {
        this._hotels = [];
    }

    get all() {
        return [].concat(this._hotels);
    }
    
    add(hotel) {
        this._hotels.push(hotel);
    }

    clear() {
        this._hotels = [];
    }   
}