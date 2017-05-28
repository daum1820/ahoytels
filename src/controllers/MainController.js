import HotelController from './HotelController';

class MainController{
    
    constructor() {
      let $ = document.querySelector.bind(document);
      console.log("Application Started...");
      $('button.load-hotel').onclick = HotelController().loadHotel.bind(HotelController());
    }
}

let controller = new MainController();

export default function() {
    return controller;
}