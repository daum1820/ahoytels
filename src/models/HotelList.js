
export default class HotelList {

    constructor() {
        this._hotels = {};
    }

    all() {
        return Object.values(this._hotels);
    }

    add(hotel) {
        this._hotels = {
          ...this._hotels,
          [hotel.id] : hotel
        }
    }

    clear() {
        this._hotels = {};
    }   
}