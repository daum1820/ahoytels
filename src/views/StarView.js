import View from './View';

export default class StarView extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
   template(model) {
       let innerTemplate = `<div></div>`;
       if(!!model){
            let stars = '', index = 0;
            for(index; index < model.maxStars; index++){
              stars += `<i class='fa ${index <= model.currentStars ? 'fa-star' : 'fa-star-o'}'></i>`;
            }
            innerTemplate = `<div class='hp-star-container hp-pull-right'>${stars}</div>`;
       }
       return innerTemplate;
   }
}