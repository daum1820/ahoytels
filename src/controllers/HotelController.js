import _ from 'lodash';
import $ from 'jquery';
import AlertService from '../services/AlertService';
import HotelView from '../views/HotelView';
import HotelReviewView from '../views/HotelReviewsView';
import HotelList from '../models/HotelList';
import HotelService from '../services/HotelService';
import StarController from './StarController';
import Bind from '../factory/Bind';

class HotelController {

    constructor() {
      this._reviews = {};
      this._hotelList = new Bind(
        new HotelList(), 
        new HotelView('#hotel-list-view'),
        'add','clear','all', 'get', 'addReviews', 'clearReviews', 'hasReviews');
        this._init();
    }
    
    _init() {
      this._alertService = AlertService();
      this._hotelService = HotelService();
    }

    _clear(){
      this._reviews = {};
      this._hotelList.clear();
      this._alertService.clear();
    }

    _bindReview(hotelId){
      if(!this._reviews[hotelId]){
        this._reviews[hotelId] = new Bind(
          this._hotelList.get(hotelId), 
          new HotelReviewView('div#reviews-' + hotelId), 
          'render');
      }
    }

    render(){
      $('.toggle-review').each(
          (index, button) => 
            button.onclick = this.toogleReviews.bind(this, button.getAttribute('hotel-id'))
      );
      _.values(this._reviews).forEach(hotel => hotel.render());
      StarController().render();
    }

    loadHotel(){
      this._clear();
      this._hotelService.list()
        .then(hotels => hotels.forEach(hotel => this._hotelList.add(hotel)))
        .then(() => this.render())
        .catch(err => this._alertService.error(err));
    }

    toogleReviews(hotelId){

      if(this._hotelList.hasReviews(hotelId)){
        this._hotelList.clearReviews(hotelId);
        this.render();
      } else {
        this._bindReview(hotelId);
        this._hotelService.fetchReviews(hotelId)
          .then(reviews => {
            this._hotelList.addReviews(hotelId);
            this._reviews[hotelId].reviews = reviews;
            return Promise.resolve(reviews);
          })
          .then(() => this.render())
          .catch(err => this._alertService.error(err));
      }
    }
}

let controller = new HotelController();
export default function() {
    return controller;
}