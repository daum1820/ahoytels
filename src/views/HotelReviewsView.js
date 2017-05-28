import View from './View';

export default class HotelReviewsView extends View {
    
  constructor(querySelector) {
      super(querySelector);
  }
    
  template(model) {
    let innerHTML = ``;
    if(model.reviews && model.reviews.length > 0){
      innerHTML = model.reviews.map(review => `
              <div class='hp-hotel-inner-container hp-hotel-reviews'>
                <div class='hp-hotel-positive'>
                  ${review.positive}
                </div>
                <div class='hp-hotel-review-details'>
                    <h4>${review.name}</h4>
                    <p>${review.comment}</p>
                </div>
              </div>
            `).join('');
    } else if (model.reviews && model.reviews.length === 0){
      innerHTML = `
        <div class='hp-hotel-inner-container hp-hotel-reviews'>
          <p> No reviews were found.</p>
        </div>`;
    }
    return innerHTML;
  }
}
