import View from './View';

export default class AlertView extends View {
    
    constructor(element) {
       super(element);
    }
    
   template(model) {
       let innerTemplate = '<p></p>';
       if(!!model){
            let type = model.type || 'info';
            innerTemplate = `<p class="alert alert-${type}">${model.message}</p>`
       }
       return innerTemplate;
   }
}