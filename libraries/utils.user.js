// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn 工具类
// @name CommonsUtil
// @version 0.5
// @description utility methods
// @grant none
// ==/UserScript==

/**
 * 类似jquery的选择器
 * @param {string} selector 选择器
 * @param {Element} ele 元素
 * @return {Element} 元素
 */
const _$ = function (selector, ele) {
  return (ele || document).querySelector(selector);
}

/**
 * 类似jquery的选择器
 * @param {string} selector 选择器
 * @param {Element} ele 元素
 * @return {NodeListOf<Element>} 元素
 */
const _$$ = function (selector, ele) {
  return [...(ele || document).querySelectorAll(selector)];
}

/**
 * 输出错误
 * @param {string} functionName 方法名
 * @param {Error} error 错误
 */
const ce = function (functionName, error) {
  console.error('function name: ' + functionName + "\nerror: " + error);
};

/**
 * 循环移除元素
 * @param {Element} ele 元素
 */
const removeRecursively = function (ele) {
  try {
    let parent = ele.parentNode;
    ele.remove();
    if (!!parent && !parent.innerHTML) {
      // 父元素存在且父元素内容为空
      removeRecursively(parent);
    }
  } catch (e) {
    ce('removeRecursively', e);
  }
};

/**
 * 移除选择器对象
 * @param {string} selector 选择器
 * @param {boolean} only 是否仅移除该对象
 */
const removeIt = function (selector, only) {
  try {
    if (only === false) {
      removeRecursively(_$(selector));
    } else {
      _$(selector).remove();
    }
  } catch (e) {
    ce('removeIt', e);
  }
};

/**
 * 移除选择器所有对象
 * @param {string} selector 选择器
 */
const removeAll = function (selector) {
  try {
    _$$(selector).forEach(function (ele) {
      removeRecursively(ele);
    });
  } catch (e) {
    ce('removeAll', e);
  }
};

/**
 * 点击选择器对象
 * @param {string} selector 选择器
 */
const clickIt = function (selector) {
  try {
    _$(selector).click();
  } catch (e) {
    ce('clickIt', e);
  }
};
