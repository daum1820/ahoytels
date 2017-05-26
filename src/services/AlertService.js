import Alert from '../models/Alert';
import AlertView from '../views/AlertView';
import Bind from '../factory/Bind';
import {jQueryDocument as $} from '../utils';

class AlertService {
    
    constructor() {
        this._alert = new Bind(
            new Alert(), 
            new AlertView($('#alert-view')),
            'message', 
            'type');    
        this._init();
    }
    
    _init() {

    }

    _setAlert(message, type){
         this._alert.message = message;
         this._alert.type = type;
    }

    info(message){
        this._setAlert(message, 'info');
    }
    
    error(message){
        this._setAlert(message, 'error');
    }
    
    success(message){
        this._setAlert(message, 'success');
    }
}

let alertService = new AlertService();

export default function() {
    return alertService;
}