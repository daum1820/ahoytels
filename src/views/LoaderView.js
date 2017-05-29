import $ from 'jquery';
import View from './View';

export default class AlertView extends View {
    
    constructor(querySelector) {
       super(querySelector);
    }
    
    template(model) {
      if(!!model){
        if(!model.loading){
          $('#loader-view').hide();
        } else {
          $('#loader-view').show();
        }
        $('#loader-view').width(model.loading + '%');
      }
      return ``;
    }
}