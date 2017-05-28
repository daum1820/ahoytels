export default class Alert {
    
    constructor(currentStars, maxStars) {
        
        this._currentStars = currentStars || 0;
        this._maxStars = maxStars || 5;
    }
    
    get currentStars() {
        return this._currentStars;
    }
    
    set currentStars(currentStars) {
        this._currentStars = currentStars;
    }
    
    get maxStars() {
        return this._maxStars;
    }
    
    set maxStars(maxStars) {
        this._maxStars = maxStars;
    }
}