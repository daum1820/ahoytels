import View from './View';
import 'font-awesome/scss/font-awesome.scss';

export default class HotelView extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
   template(model) {
       return `
              ${model.all().map((item, idx) => {
                let toogleReviewsLabel = !!item.hasReviews ? 'Hide reviews' : 'Show reviews';
                return `
                <div id='${idx}' class='hp-hotel-container hotel-view'>
                  <div class='hp-hotel-main'>
                    <div class='hp-hotel-images'></div>
                    <div class='hp-hotel-details'>
                      <div class='hp-hotel-header'>
                        <div id='stars-${idx}' class='hp-stars'max-stars=5 current-stars=${item.stars}></div>
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
                          <div class'hp-hotel-more'>
                            <button hotel-id="${item.id}" type='button' class='hp-btn hp-btn-sm toggle-review'>
                              ${toogleReviewsLabel}
                            </button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div id='reviews-${item.id}' class='hp-hotel-reviews hotel-reviews'>
                  </div>
                </div>
              `}).join('')}
       `;
   }
}
