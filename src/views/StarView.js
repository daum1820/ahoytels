import View from './View';

export default class StarView extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
   template(model) {
       let innerTemplate = `<div></div>`;
       if(!!model){
            let stars = '', idx = 0;
            for(idx; idx < model.maxStars; idx++){
              stars += `<i class='fa ${idx <= model.currentStars ? 'fa-star' : 'fa-star-o'}'></i>`;
            }
            innerTemplate = `<div class='hp-star-container hp-pull-right'>${stars}</div>`;
       }
       return innerTemplate;
   }
}