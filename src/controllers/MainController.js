import HotelListController from './HotelListController';

class MainController{
    
    constructor() {
      let $ = document.querySelector.bind(document);
      console.log("Application Started...");
      $('button.load-hotel').onclick = HotelListController().loadHotel.bind(HotelListController());
    }
}

let controller = new MainController();

export default function() {
    return controller;
}