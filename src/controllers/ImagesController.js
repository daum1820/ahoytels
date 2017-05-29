import $ from 'jquery';
import ImagesView from '../views/ImagesView';
import Bind from '../factory/Bind';

class ImagesController{
    constructor(){
      this._hotels = {};
    }
    render(hotels){
      
      hotels = hotels.reduce((curr, next) =>{
        curr[next.id] = next;
        return curr;
      },{});

      $('.hp-images').each((index, star) => {
        const id = star.getAttribute('id');
        const hotelId = star.getAttribute('hotel-id');
        this._hotels[hotelId] = new Bind(
          hotels[hotelId],
          new ImagesView(`div#${id}`),
          'currImage'
        )
      });
    }

    changeImage(hotelId, index){
      this._hotels[hotelId].currImage = parseInt(index);
    }
}

let controller = new ImagesController();

export default function() {
    return controller;
}