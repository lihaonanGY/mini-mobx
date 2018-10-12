import {dependenceManager} from './dependenceManager';
var obIDCounter = 1;
class Observable {
  obID = 0;
  value = null;

  constructor(v) {
    this.obID = 'ob-' + (++obIDCounter);
    this.value = v;
  }

  get() {
    dependenceManager.collect(this.obID);
    return this.value;
  }

  set(v) {
    this.value = v;
    dependenceManager.trigger(this.obID);
  }

  /**
   * 手动触发依赖
   */
  trigger() {
    dependenceManager.trigger(this.obID);
  }
}

export {
  Observable
};