import View from './View';

export default class Im extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
   template(model) {
       let innerTemplate = `<div></div>`;
       if(!!model && model.message){
            let type = model.type || 'info';
            let icon = type === 'error' ? 'exclamation-triangle' : ( type === 'success' ? 'check': type)
            innerTemplate = `<div class='hp-container hp-alert hp-alert-${type}'>
              <i class='fa fa-${icon}'></i> ${model.message}
            </div>`
       }
       return innerTemplate;
   }
}