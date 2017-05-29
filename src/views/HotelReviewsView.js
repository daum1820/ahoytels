import View from './View';

export default class HotelReviewsView extends View {
    
  constructor(querySelector) {
      super(querySelector);
  }
    
  template(model) {
    let innerHTML = ``;
    if(model.reviews && model.reviews.length > 0){
      innerHTML = model.reviews.map(review => `
              <div class='hp-container-center dark-background'>
                <div class='hp-hotel-item item-1 hp-container-center hp-container-middle'>
                  <div class='hp-badge'>
                    <i class='fa fa-${review.positive ? 'thumbs-up' : 'thumbs-down'}'></i>
                  </div>
                </div>
                <div class='hp-hotel-item item-6'>
                    <h3>${review.name}</h3>
                    <div>${review.comment}</div>
                </div>
              </div>
            `).join('');
    } else if (model.reviews && model.reviews.length === 0){
      innerHTML = `
        <div class='hp-container-center hp-container-middle dark-background'>
          <p> No reviews were found.</p>
        </div>`;
    }
    return innerHTML;
  }
}
