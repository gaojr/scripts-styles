// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn 工具类
// @name Utils
// @version 0.1
// @description utility methods
// @grant none
// ==/UserScript==

/**
 * 输出错误
 * @param functionName 方法名
 * @param selector 选择器
 * @param error 错误
 */
const error = function (functionName, selector, error) {
  console.error('function name: ' + functionName + "\nselector: " + selector + "\nerror: " + error);
};

/**
 * 点击选择器对象
 * @param selector 选择器
 */
const clickIt = function (selector) {
  try {
    document.querySelector(selector).click();
  } catch (e) {
    error('clickIt', selector, e);
  }
};

/**
 * 移除选择器对象
 * @param selector 选择器
 */
const removeIt = function (selector) {
  try {
    document.querySelector(selector).remove();
  } catch (e) {
    error('removeIt', selector, e);
  }
};

/**
 * 移除选择器所有对象
 * @param selector 选择器
 */
const removeAll = function (selector) {
  try {
    document.querySelectorAll(selector).forEach(function (e) {
      e.remove();
    });
  } catch (e) {
    error('removeAll', selector, e);
  }
};
