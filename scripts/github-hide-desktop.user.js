// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/scripts-styles
// @name:CN-zh_cn GitHub隐藏Desktop按钮
// @name GitHubHideDesktop
// @version 0.7
// @description hide "Open in GitHub Desktop" button
// @license MIT
// @match https://github.com/*
// @require https://greasyfork.org/scripts/393085-commonsutil/code/CommonsUtil.js
// @grant none
// @connect github.com
// @icon https://github.githubassets.com/pinned-octocat.svg
// ==/UserScript==

(function () {
  let func = () => {
    // 删除仓库页的 "Open in Desktop"
    removeIt('.get-repo-modal div[data-target] ul li[data-platforms]', true);
    // 删除文件页的 "Open this file in GitHub Desktop"
    removeIt('a.btn-octicon.tooltipped', true);
  };
  addToFuncMap('github-hide-desktop', func);
})();
