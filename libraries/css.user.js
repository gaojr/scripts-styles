// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn css工具类
// @name CssUtil
// @version 0.1
// @description css utility methods
// @grant GM_addStyle
// ==/UserScript==

/**
 * 隐藏
 * @param selector 选择器
 */
const hide = function (selector) {
  GM_addStyle(selector + ' { display: none!important;height: 0!important;width: 0!important; }');
};
/**
 * 取消浮动
 * @param selector 选择器
 */
const floatNone = function (selector) {
  GM_addStyle(selector + ' { float: none; }');
};

/**
 * 左右居中
 * @param selector 选择器
 */
const marginCenter = function (selector) {
  GM_addStyle(selector + ' { margin-left: auto;margin-right: auto; }');
};

/**
 * 左右居中
 * @param selector 选择器
 */
const clearCenter = function (selector) {
  floatNone(selector);
  marginCenter(selector);
};
