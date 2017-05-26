export default class Alert {
    
    constructor(message, type) {
        
        this._message = message || '';
        this._type = type || 'info';
    }
    
    get message() {
        return this._message;
    }
    
    set message(message) {
        this._message = message;
    }
    
    get type() {
        return this._type;
    }
    
    set type(type) {
        this._type = type;
    }
}