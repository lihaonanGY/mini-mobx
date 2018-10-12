import {Observable} from './observable';
import { createObservable } from './extendObservable';

/**
 * 包装 observable 属性
 * @param target
 * @param name
 * @param descriptor
 * @returns {{enumerable: boolean, configurable: boolean, get: get, set: set}}
 */
function observable(target, name, descriptor) {
  var v = descriptor.initializer.call(this);
  if (typeof (v) === 'object') {
    createObservable(v);
  }
  var observable = new Observable(v);
  return {
    enumerable: true,
    configurable: true,
    get: function () {
      return observable.get();
    },
    set: function (v) {
      // 重新赋值对象的时候，为其值也创建observable
      if (typeof (v) === 'object') {
        createObservable(v);
      }
      return observable.set(v);
    }
  };
};

export {
  observable
};