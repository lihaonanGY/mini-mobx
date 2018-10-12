'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autorun = undefined;

var _dependenceManager = require('./dependenceManager');

const autorun = function (handler) {
  //收集依赖
  _dependenceManager.dependenceManager.beginCollect(handler);
  handler();
  _dependenceManager.dependenceManager.endCollect();
};

exports.autorun = autorun;