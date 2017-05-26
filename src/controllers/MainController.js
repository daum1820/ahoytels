import AlertService from '../services/AlertService';

class MainController {
    
    constructor() {
        this._init();
    }
    
    _init() {
        this._alertService = AlertService();
        this._alertService.info('Ahoy')
    }
}

let mainController = new MainController();

export default function() {
    return mainController;
}