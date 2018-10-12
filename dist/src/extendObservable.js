'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObservable = exports.extendObservable = undefined;

var _observable = require('./observable');

const createObservableProperty = function createObservableProperty(target, property) {
  const observable = new _observable.Observable(target[property]);
  Object.defineProperty(target, property, {
    get: function get() {
      return observable.get();
    },
    set: function set(value) {
      return observable.set(value);
    }
  });
  //递归包装 observable
  if (typeof target[property] === 'object') {
    for (let i in target[property]) {
      if (target[property].hasOwnProperty(i)) {
        createObservableProperty(target[property], i);
      }
    }
  }
};
const extendObservable = function extendObservable(target, obj) {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      target[i] = obj[i];
      createObservableProperty(target, i);
    }
  }
};

const createObservable = function createObservable(target) {
  for (let i in target) {
    if (target.hasOwnProperty(i)) {
      createObservableProperty(target, i);
    }
  }
};
exports.extendObservable = extendObservable;
exports.createObservable = createObservable;