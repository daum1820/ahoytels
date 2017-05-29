import $ from 'jquery';
import Star from '../models/Stars';
import StarView from '../views/StarView';
import Bind from '../factory/Bind';
import '../style/stars.scss';

class StarController{
    render(){
      $('.hp-stars').each((idx, star) => {
            const id = star.getAttribute('id');
            const currentStars = star.getAttribute('current-stars');
            const maxStars = star.getAttribute('max-stars');
            return new Bind(
              new Star(currentStars, maxStars),
              new StarView(`div#${id}`),
              'currentStars', 'maxStars'
            )
          });
    }
}

let controller = new StarController();

export default function() {
    return controller;
}