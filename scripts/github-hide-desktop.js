// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/greasyfork-scripts
// @name:CN-zh_cn GitHub隐藏Desktop按钮
// @name GitHubHideDesktop
// @version 0.1
// @description hide "Open in GitHub Desktop" button
// @license MIT
// @match https://github.com/*
// @grant none
// @connect github.com
// @icon https://github.githubassets.com/pinned-octocat.svg
// ==/UserScript==

(function () {
  // 删除仓库页的 "Open in Desktop"
  if (!!document.querySelector('.get-repo-modal-options .mt-2 .tooltipped.js-get-repo')) {
    document.querySelector('.get-repo-modal-options .mt-2 .tooltipped.js-get-repo').remove();
  }
  // 删除文件页的 "Open this file in GitHub Desktop"
  if (!!document.querySelector(".btn-octicon.tooltipped")) {
    document.querySelector(".btn-octicon.tooltipped").remove();
  }
})();
