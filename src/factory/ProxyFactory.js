export default class ProxyFactory {
    
    static create(object, props, callback) {
     
        return new Proxy(object, {
                
                get(target, property, receiver) {
                    console.info("ProxyFactory GET interceptor:", target, property, receiver);
                    if(props.includes(property) && ProxyFactory._isFunction(target[property])) {
                        return function() {
                            let result = Reflect.apply(target[property], target, arguments);
                            callback(target);
                            return result;
                        }
                    }
                    
                    return Reflect.get(target, property, receiver);
                },
                set(target, property, value, receiver) {
                    console.info("ProxyFactory SET interceptor:", target, property, value, receiver);
                    let result = Reflect.set(target, property, value, receiver);
                    if(props.includes(property)){
                        callback(target);
                    }
                    return result;
                }
        });
    }
    
    static _isFunction(func) {
        return typeof(func) === typeof(Function);
    }
}