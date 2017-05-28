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
        let $ = document.querySelector.bind(document);
        let element = $(this._selector);
        element.innerHTML = this.template(model);
    }
}