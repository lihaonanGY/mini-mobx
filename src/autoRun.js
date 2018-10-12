import {dependenceManager} from './dependenceManager';

const autorun = function (handler) {
  //收集依赖
  dependenceManager.beginCollect(handler);
  handler();
  dependenceManager.endCollect();
};

export {
  autorun
};