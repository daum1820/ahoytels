import $ from 'jquery';
 /**
  * Base Interface for Views.
  */
export default class View {
    
    constructor(querySelector) {
        this._selector = querySelector;
    }
    
    template() {
        throw new Error('This method must be declared.');
    }
    
    update(model) {
        $(this._selector).html(this.template(model));
    }
}