'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = undefined;

var _dependenceManager = require('./dependenceManager');

var obIDCounter = 1;
let Observable = class Observable {

  constructor(v) {
    this.obID = 0;
    this.value = null;

    this.obID = 'ob-' + ++obIDCounter;
    this.value = v;
  }

  get() {
    _dependenceManager.dependenceManager.collect(this.obID);
    return this.value;
  }

  set(v) {
    this.value = v;
    _dependenceManager.dependenceManager.trigger(this.obID);
  }

  /**
   * 手动触发依赖
   */
  trigger() {
    _dependenceManager.dependenceManager.trigger(this.obID);
  }
};
exports.Observable = Observable;