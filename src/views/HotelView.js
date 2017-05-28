import View from './View';

export default class HotelListView extends View {
    
    constructor(element) {
       super(element);
    }
    
   template(model) {
       return `
              ${model.all().map(item => `
                <div id='${item.id}' class='hp-hotel-container hotel-view'>
                  <div class='hp-hotel-images'></div>
                  <div class='hp-hotel-details'>
                    <div class='hp-hotel-header'>
                      <div class='hp-hotel-stars hp-pull-right'>
                        ${item.stars}
                      </div>
                      <h1>${item.name}</h1>
                      <h4>${item.city} - ${item.country}</h4>
                    </div>
                    <div>
                      <p>${item.description}</p>
                    </div>
                    <div class='hp-hotel-footer'>
                        <div class='hp-pull-right'>
                              <h1>${item.price}€</h1>
                              <small>${item.dateStart} - ${item.dateEnd}</small>
                        </div>
                        <div class'hp-hotel-more toogle-reviews'>
                          <button type="button" class="hp-btn hp-btn-sm toogle-reviews">Show reviews</button>
                        </div>
                    </div>
                  </div>
                </div>
              `).join('')}
       `;
   }
}
