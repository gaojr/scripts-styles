// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn GitHub隐藏Desktop按钮
// @name GitHubHideDesktop
// @version 0.3
// @description hide "Open in GitHub Desktop" button
// @license MIT
// @match https://github.com/*
// @require https://greasyfork.org/scripts/393085-commonsutil/code/CommonsUtil.js
// @grant none
// @connect github.com
// @icon https://github.githubassets.com/pinned-octocat.svg
// ==/UserScript==

(function () {
  window.onload = function () {
    console.log('github-hide-desktop start!');
    // 删除仓库页的 "Open in Desktop"
    removeIt('.get-repo-modal-options .mt-2 .tooltipped.js-get-repo', true);
    // 删除文件页的 "Open this file in GitHub Desktop"
    removeIt('.btn-octicon.tooltipped', true);
    console.log('github-hide-desktop end!');
  }
})();
