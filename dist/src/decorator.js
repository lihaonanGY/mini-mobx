'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = undefined;

var _observable = require('./observable');

var _extendObservable = require('./extendObservable');

/**
 * 包装 observable 属性
 * @param target
 * @param name
 * @param descriptor
 * @returns {{enumerable: boolean, configurable: boolean, get: get, set: set}}
 */
function observable(target, name, descriptor) {
  var v = descriptor.initializer.call(this);
  if (typeof v === 'object') {
    (0, _extendObservable.createObservable)(v);
  }
  var observable = new _observable.Observable(v);
  return {
    enumerable: true,
    configurable: true,
    get: function () {
      return observable.get();
    },
    set: function (v) {
      // 重新赋值对象的时候，为其值也创建observable
      if (typeof v === 'object') {
        (0, _extendObservable.createObservable)(v);
      }
      return observable.set(v);
    }
  };
};

exports.observable = observable;