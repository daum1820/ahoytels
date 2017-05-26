import ProxyFactory from './ProxyFactory';
 
export default class Bind {
    
    constructor(model, view, ...props) {
        
        //Create a proxy to bind View and Model.
        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model));
            
        view.update(model);
        
        return proxy;
    }
}