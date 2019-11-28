// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn 异次元移除广告
// @name IplaysoftRemoveAdds
// @version 0.1
// @description remove adds on iplaysoft
// @license MIT
// @match https://www.iplaysoft.com/
// @match https://www.iplaysoft.com/*
// @grant GM_addStyle
// @connect www.iplaysoft.com
// ==/UserScript==

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

var home = /^(https:\/\/www.iplaysoft.com\/?)$/;
var article = /https:\/\/www.iplaysoft.com\/\S+/;

if (home.test(window.location.href)) {
  // 首页

  // 删除广告
  document.querySelector('#show_post_side').remove();
  document.querySelector('#section_event').remove();
  document.querySelector('#section_hot').remove();
  // 样式调整
  GM_addStyle('#show_post_entry,#postlist { float: none;margin-left: auto;margin-right: auto; }');
} else if (article.test(window.location.href)) {
  // 文章页面

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
