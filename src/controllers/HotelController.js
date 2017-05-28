import AlertService from '../services/AlertService';
import HotelView from '../views/HotelView';
import HotelList from '../models/HotelList';
import HotelService from '../services/HotelService';
import Bind from '../factory/Bind';

class HotelController {
    
    constructor() {
      let $ = document.querySelector.bind(document);
      this._hotelList = new Bind(
        new HotelList(), 
        new HotelView($('#hotel-list-view')),
        'add','clear','all');
        this._init();
    }
    
    _init() {
        this._alertService = AlertService();
        this._hotelService = HotelService();
    }

    loadHotel(){
        this._hotelList.clear();
        this._alertService.clear();
        this._hotelService.list()
          .then(hotels => hotels.forEach(hotel => {
            this._hotelList.add(hotel)}
            ))
          .catch(err => this._alertService.error(err));
    }
}

let controller = new HotelController();

export default function() {
    return controller;
}