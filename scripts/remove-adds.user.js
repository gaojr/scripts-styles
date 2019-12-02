// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn 移除广告
// @name RemoveAdds
// @version 0.4
// @description remove adds
// @license MIT
// @match https://blog.csdn.net/*
// @match https://*.baidu.com/*
// @match https://www.iplaysoft.com/*
// @match https://www.jianshu.com/*
// @require https://greasyfork.org/scripts/393085-commonsutil/code/CommonsUtil.js?version=754478
// @require https://greasyfork.org/scripts/393202-cssutil/code/CssUtil.js?version=754549
// @grant none
// @run-at document-end
// ==/UserScript==

const wlh = window.location.href;

// 目标[选择器]
const targets = [];

/**
 * 移除目标
 */
const removeTarget = function () {
  // 用英文逗号拼接选择器
  let selector = targets.join();
  if (!selector) {
    return;
  }
  removeAll(selector);
  // 清空列表
  targets.length = 0;
};

////////// 分割线

/**
 * 通用-广告
 */
const dealCommons = function () {
  targets.push('.adsbygoogle');
  removeTarget();
};
/**
 * 通用-脚本
 */
const dealScripts = function () {
  targets.push('body script');
  removeTarget();
};

////////// 分割线

/**
 * 百度
 */
const dealBaidu = function () {
  // 贴吧
  const tieba = /https:\/\/tieba\.baidu\.com\/.+/;
  // 贴吧-吧
  const tieba_bar = /https:\/\/tieba\.baidu\.com\/f\?.+/;
  // 贴吧-帖子
  const tieba_article = /https:\/\/tieba\.baidu\.com\/p\/.+/;


  if (tieba.test(wlh)) {
    // 广告悬浮框
    targets.push('body > div.clearfix');
  }
  if (tieba_bar.test(wlh)) {
    // 右边的会员、热议、广告
    targets.push('#pagelet_encourage-celebrity\\/pagelet\\/celebrity');
    targets.push('#pagelet_frs-aside\\/pagelet\\/hottopic');
    targets.push('#pagelet_frs-aside\\/pagelet\\/ad');
    targets.push('#branding_ads');
    // 列表中的广告
    targets.push('#thread_list > li.clearfix:not(.j_thread_list)');
  } else if (tieba_article.test(wlh)) {
    targets.push('#j_p_postlist > div.clearfix[ad-dom-img]');
  }
};

/**
 * CSDN
 */
const dealCsdn = function () {
  // 文章页面
  const article = /https:\/\/.*\.csdn\.net\/.*\/article\/details\/.*/;

  if (article.test(wlh)) {
    targets.push('#dmp_ad_58');
    targets.push('#mainBox > aside');
    targets.push('.tool-box.vertical');
    targets.push('.recommend-box');
    targets.push('body>div:last-child');
    clickIt('#mainBox > main > div.hide-article-box.hide-article-pos.text-center > a');
    clearCenter('#mainBox > main');
  }
};

/**
 * 异次元 iplaysoft.com
 */
const dealIplaysoft = function () {
  // 全局
  dealScripts();
  targets.push('iframe');
  targets.push('.crumb_ad');
  targets.push('div#sidebar');

  // 首页
  const home = /https:\/\/www\.iplaysoft\.com\/?$/;
  // 文章页面
  const article = /https:\/\/www\.iplaysoft\.com\/.+/;

  if (home.test(wlh)) {
    // 删除广告
    targets.push('#show_post_side');
    targets.push('#section_event');
    targets.push('#section_hot');
    // 样式调整
    clearCenter('#show_post_entry,#postlist');
  } else if (article.test(wlh)) {
    // 删除广告
    targets.push('.post .entry-content + div');
    targets.push('.post > div.entry-meta.clear > ul.same-cat-post + div');
    // 删除回复
    targets.push('div#respond');

    // 删掉有 style、无 id、无 class、无文字的 div
    document.querySelectorAll('div[style]:not([id]):not([class])').forEach(function (ele) {
      if (!ele.textContent.trim()) {
        ele.remove();
      }
    });
    // 样式调整
    floatNone('#container #content');
    marginCenter('#container #content, #share_toolbar,.entry-banner,#respond');
  }
};

/**
 * 简书
 */
const dealJianshu = function () {
  // 文章页面
  const article = /https:\/\/www\.jianshu\.com\/p\/.+/;

  if (article.test(wlh)) {
    targets.push('#__next ._3Pnjry,#__next > div._21bLU4._3kbg6I > div > aside,#__next > div._21bLU4._3kbg6I > div > div._gp-ck');
  }
};

////////// 分割线

(function () {
  'use strict';

  window.onload = function () {
    console.log('remove-adds start!');
    dealCommons();

    const isBaidu = /https?:\/\/.*\.baidu\.com((\/.*)|(\/?))/;
    const isCsdn = /https?:\/\/.*\.csdn\.net((\/.*)|(\/?))/;
    const isIplaysoft = /https?:\/\/www\.iplaysoft\.com((\/.*)|(\/?))/;
    const isJianshu = /https?:\/\/www\.jianshu\.com((\/.*)|(\/?))/;

    if (isBaidu.test(wlh)) {
      dealBaidu();
    } else if (isCsdn.test(wlh)) {
      dealCsdn();
    } else if (isIplaysoft.test(wlh)) {
      dealIplaysoft();
    } else if (isJianshu.test(wlh)) {
      dealJianshu();
    }
    removeTarget();
    console.log('remove-adds end!');
  }

})();
