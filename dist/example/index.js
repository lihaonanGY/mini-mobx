'use strict';

var _desc, _value, _class, _descriptor, _descriptor2;

var _index = require('../src/index');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

let Person = (_class = class Person {
  constructor() {
    _initDefineProp(this, 'name', _descriptor, this);

    _initDefineProp(this, 'sex', _descriptor2, this);

    this.age = 22;
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'name', [_index.observable], {
  enumerable: true,
  initializer: function () {
    return 'lihaonan';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'sex', [_index.observable], {
  enumerable: true,
  initializer: function () {
    return 'man';
  }
})), _class);

const person = new Person();

(0, _index.autorun)(() => {
  console.log('autorun', person.name);
  // console.log('autorun', person.age);
});
person.name = 'dashuaige';
// person.sex = 'woman';
// person.age = 23;