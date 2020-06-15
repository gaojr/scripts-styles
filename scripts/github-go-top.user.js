// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/scripts-styles
// @name:CN-zh_cn Github一键返回顶部
// @name GithubGoTop
// @version 0.4
// @description scroll top
// @license MIT
// @match *github.com/*
// @grant none
// @connect github.com
// @icon https://github.githubassets.com/pinned-octocat.svg
// ==/UserScript==

(function () {
  var body = document.querySelector('body');
  var goTop = document.createElement('div');
  var imgBox = document.createElement('img');
  goTop.style.position = 'fixed';
  goTop.style.right = '0%';
  goTop.style.bottom = '0%';
  goTop.style.cursor = 'pointer';
  imgBox.src =
    'data:image/png;base64,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';
  imgBox.style.height = '48px';
  imgBox.style.width = '48px';
  goTop.appendChild(imgBox);
  body.appendChild(goTop);
  goTop.onclick = function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
})();
