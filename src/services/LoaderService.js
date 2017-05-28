import LoaderView from '../views/LoaderView';
import Bind from '../factory/Bind';

class LoaderService {
    
    constructor() {
        this._loader = new Bind(
            {loading : false}, 
            new LoaderView('#loader-view'),
            'loading');
    }
    
    start(){
      this._loader.loading = true;
    }

    stop(){
      this._loader.loading = false;
    }
}

let service = new LoaderService();

export default function() {
    return service;
}