// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn 工具类
// @name CommonsUtil
// @version 0.2
// @description utility methods
// @grant none
// ==/UserScript==

/**
 * 输出错误
 * @param functionName 方法名
 * @param error 错误
 */
const error = function (functionName, error) {
  console.error('function name: ' + functionName + "\nerror: " + error);
};

/**
 * 循环移除元素
 * @param ele 元素
 */
const removeRecursively = function (ele) {
  try {
    let parent = ele.parentElement;
    ele.remove();
    if (!!parent && !parent.innerHTML) {
      removeRecursively(parent);
    }
  } catch (e) {
    error('removeRecursively', e);
  }
};

/**
 * 移除选择器对象
 * @param selector 选择器
 */
const removeIt = function (selector) {
  try {
    removeRecursively(document.querySelector(selector));
  } catch (e) {
    error('removeIt', e);
  }
};

/**
 * 移除选择器所有对象
 * @param selector 选择器
 */
const removeAll = function (selector) {
  try {
    document.querySelectorAll(selector).forEach(function (ele) {
      removeRecursively(ele);
    });
  } catch (e) {
    error('removeAll', e);
  }
};

/**
 * 点击选择器对象
 * @param selector 选择器
 */
const clickIt = function (selector) {
  try {
    document.querySelector(selector).click();
  } catch (e) {
    error('clickIt', e);
  }
};
