import _ from 'lodash';

export default class HotelList {

    constructor() {
      this._hotels = {};
    }

    all() {
      return _.values(this._hotels);
    }

    add(hotel) {
      this._hotels = {
        ...this._hotels,
        [hotel.id] : hotel
      }
    }

    get(hotelId){
      return this._hotels[hotelId];
    }

    clear() {
      this._hotels = {};
    }
}