import AlertService from '../services/AlertService';
import HotelListView from '../views/HotelListView';
import HotelList from '../models/HotelList';
import HotelService from '../services/HotelService';
import Bind from '../factory/Bind';

class HotelListController {
    
    constructor() {
      let $ = document.querySelector.bind(document);
      this._hotelList = new Bind(
        new HotelList(), 
        new HotelListView($('#hotel-list-view')),
        'add','clear','all');
        this._init();
    }
    
    _init() {
        this._alertService = AlertService();
        this._hotelService = HotelService();
    }

    loadHotel(){
        
        this._hotelList.clear();

        this._hotelService.list()
          .then(hotels => hotels.forEach(hotel => this._hotelList.add(hotel)))
          .catch(err => this._alertService.error(err));
    }
}

let controller = new HotelListController();

export default function() {
    return controller;
}