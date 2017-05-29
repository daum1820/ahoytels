import LoaderView from '../views/LoaderView';
import Bind from '../factory/Bind';

class LoaderService {
    
    constructor() {
        this._loader = new Bind(
            {loading : 0}, 
            new LoaderView('#loader-view'),
            'loading');
    }
    
    start(){
      this._loader.loading = 0;
    }

    inc(percentual){
      this._loader.loading += percentual ? percentual : (100 - this._loader.loading) /2;
    }

    done(){
      this._loader.loading = 100;
      setTimeout(() => {
        this._loader.loading = 0;
      }, 500)
    }
}

let service = new LoaderService();

export default function() {
    return service;
}