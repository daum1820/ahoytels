import View from './View';

export default class ImageView extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
   template(model) {
       let innerTemplate = `<div></div>`;
       if(!!model){
          innerTemplate = model.images.length > 1 ? `
            <div class='hp-image-nav'>
              ${model.images.map((item, index) => {
                return `
                  <i hotel-id='${model.id}' index='${index}' class='nav-button fa fa-${ index === model.currImage ? 'circle' : 'circle-o'}'></i>
                `
              }).join('')}
            </div>
            <img src='${model.images[model.currImage]}' />` : `<img src='${model.images[model.currImage]}' /> `;
       }
       return innerTemplate;
   }
}
