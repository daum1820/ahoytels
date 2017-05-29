import _ from 'lodash';
import $ from 'jquery';
import AlertService from '../services/AlertService';
import HotelView from '../views/HotelView';
import HotelReviewView from '../views/HotelReviewsView';
import HotelList from '../models/HotelList';
import HotelService from '../services/HotelService';
import StarController from './StarController';
import Bind from '../factory/Bind';
import '../style/hotel.scss';

class HotelController {

    constructor() {
      this._reviews = {};
      this._hotelList = new Bind(
        new HotelList(), 
        new HotelView('#hotel-list-view'),
        'add','clear','all');
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

      return this._reviews[hotelId];
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

    toogleReviews(hotelId, $event){
      let hotel = this._bindReview(hotelId);
      
      if(!!hotel.reviews){
        $($event.currentTarget).text('Show Reviews');
        this._hotelList.clearReviews(hotelId);
        this.render();
      } else {
        $($event.currentTarget).text('Hide Reviews');
        this._hotelService.fetchReviews(hotelId)
          .then(reviews => {
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