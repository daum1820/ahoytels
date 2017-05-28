import View from './View';

export default class AlertView extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
   template(model) {
       let innerTemplate = ``;
       if(!!model && model.loading){
            innerTemplate = `<p>Loading</p>`
       }
       return innerTemplate;
   }
}