// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn 移除广告
// @name RemoveAdds
// @version 0.1
// @description remove adds
// @license MIT
// @match https://blog.csdn.net/*
// @match https://www.iplaysoft.com/*
// @match https://www.jianshu.com/*
// @grant GM_addStyle
// @run-at document-end
// ==/UserScript==

var href = window.location.href;

/**
 * CSDN
 */
var dealCsdn = function () {
  // 文章页面
  var article = /https:\/\/.*\.csdn\.net\/.*\/article\/details\/.*/;

  if (article.test(href)) {
    document.querySelector('#dmp_ad_58').remove();
    document.querySelector('#mainBox > aside').remove();
    document.querySelector('.tool-box.vertical').remove();
    document.querySelector('.recommend-box').remove();
    // document.querySelector('.csdn-side-toolbar').parentElement.remove();
    // document.querySelector('#mainBox > main > div.hide-article-box.hide-article-pos.text-center > a').click();
    GM_addStyle('#mainBox > main { float: none;margin-left: auto;margin-right: auto; }');
  }
};
/**
 * 异次元 iplaysoft.com
 */
var dealIplaysoft = function () {
  // 全局
  document.querySelectorAll('body script').forEach(function (e) {
    e.remove();
  });
  document.querySelectorAll('iframe').forEach(function (e) {
    e.remove();
  });
  document.querySelectorAll('.adsbygoogle').forEach(function (e) {
    e.remove();
  });
  document.querySelectorAll('.crumb_ad').forEach(function (e) {
    e.remove();
  });
  document.querySelector('div#sidebar').remove();

  // 首页
  var home = /https:\/\/www\.iplaysoft\.com\/?$/;
  // 文章页面
  var article = /https:\/\/www\.iplaysoft\.com\/.+/;

  if (home.test(href)) {
    // 删除广告
    document.querySelector('#show_post_side').remove();
    document.querySelector('#section_event').remove();
    document.querySelector('#section_hot').remove();
    // 样式调整
    GM_addStyle('#show_post_entry,#postlist { float: none;margin-left: auto;margin-right: auto; }');
  } else if (article.test(href)) {
    // 删除广告
    document.querySelector('.post .entry-content').nextSibling.remove();
    document.querySelector('.post > div.entry-meta.clear > ul.same-cat-post').nextSibling.remove();
    // 删除回复
    document.querySelector('div#respond').remove();

    // 删掉有 style、无 id、无 class、无文字的 div
    document.querySelectorAll('div').forEach(function (e) {
      if (!!e.getAttribute('style') && !e.getAttribute('id') && !e.getAttribute('class') && !e.textContent.trim()) {
        e.remove();
      }
    });
    // 样式调整
    GM_addStyle('#container #content { float: none;margin-left: auto;margin-right: auto; }');
    GM_addStyle('#share_toolbar,.entry-banner,#respond { margin-left: auto;margin-right: auto; }');
  }
};

/**
 * 简书
 */
var dealJianshu = function () {
  // 文章页面
  var article = /https:\/\/www\.jianshu\.com\/p\/.+/;
  if (article.test(href)) {
    GM_addStyle('#__next ._3Pnjry,#__next > div._21bLU4._3kbg6I > div > aside,#__next > div._21bLU4._3kbg6I > div > div._gp-ck { display: none; }');
  }
};

(function () {
  'use strict';

  var isCsdn = /https:\/\/.*\.csdn\.net\/?.*/;
  var isIplaysoft = /https:\/\/www\.iplaysoft\.com\/?.*/;
  var isJianshu = /https:\/\/www\.jianshu\.com\/?.*/;

  if (isCsdn.test(href)) {
    dealCsdn();
  } else if (isIplaysoft.test(href)) {
    dealIplaysoft();
  } else if (isJianshu.test(href)) {
    dealJianshu();
  }

})();
