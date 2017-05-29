import View from './View';
import 'font-awesome/scss/font-awesome.scss';

export default class HotelView extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
   template(model) {
       return `
              ${model.all().map((item, index) => {
                return `
                <div id='${index}' class='hp-container-center'>
                  <div class='hp-container-item'>
                    <div class='hp-container'>
                      <div id='img-${index}' hotel-id='${item.id}' class='hp-hotel-item item-1 height-300 hp-images'>
                        
                      </div>
                      <div class='hp-hotel-item item-4'>
                        <div class='hp-hotel-header'>
                          <div id='stars-${index}' class='hp-stars'max-stars=5 current-stars=${item.stars}></div>
                          <h2>${item.name}</h2>
                          <small>${item.city} - ${item.country}</small>
                        </div>
                        <div class='hp-hotel-main'>
                          <div>${item.description}</div>
                        </div>
                        <div class='hp-hotel-footer hp-container'>
                          <div class='hp-hotel-item hp-align-start'>
                            <button hotel-id='${item.id}' type='button' class='hp-btn hp-btn-sm toggle-review'>
                              Show Reviews
                            </button>
                          </div>
                          <div class='hp-hotel-item hp-align-end right'>
                            <div class='hp-hotel-price'>${item.price}<small>€</small></div>
                            <small>${item.dateStart} - ${item.dateEnd}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id='reviews-${item.id}'>
                    </div>
                  </div>
                </div>
              `}).join('')}
       `;
   }
}
