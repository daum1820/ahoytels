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

    hasReviews(hotelId){
      return this._hotels[hotelId].hasReviews;
    }

    addReviews(hotelId){
      this._hotels[hotelId].hasReviews = true;
    }

    clearReviews(hotelId){
      this._hotels[hotelId].clearReviews();
      this._hotels[hotelId].hasReviews = false;
    }
}