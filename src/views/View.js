 /**
  * Base Interface for Views.
  */
export default class View {
    
    constructor(element) {
        this._element = element;
    }
    
    template() {
        throw new Error('This method must be declared.');
    }
    
    update(model) {
        console.info("Dispatch View update: ", this._element, model);
        this._element.innerHTML = this.template(model);
    }
}