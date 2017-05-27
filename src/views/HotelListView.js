import View from './View';

export default class HotelListView extends View {
    
    constructor(element) {
       super(element);
    }
    
   template(model) {
       return `
       ${model.all.map(item => `
        <div class="hp-hotel-container">
            <div class="hotel-images"></div>
            <div class="hotel-details">
              <h4>${item.name}</h4>
            </div>
          </div>
          `).join('')} 
       `;
   }
}
