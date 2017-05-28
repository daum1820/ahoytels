import View from './View';

export default class AlertView extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
   template(model) {
       let innerTemplate = `<p></p>`;
       if(!!model){
            let type = model.type || 'info';
            innerTemplate = `<p class="alert alert-${type}">${model.message}</p>`
       }
       return innerTemplate;
   }
}