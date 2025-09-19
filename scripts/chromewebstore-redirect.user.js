// ==UserScript==
// @name          ChromeWebStoreRedirect
// @name:CN-zh_cn 谷歌网上应用店重定向
// @version       1.0
// @description   自动将Chrome网上应用店链接重定向到crx4chrome.com
// @author        gaojr
// @namespace     https://github.com/gaojr/scripts-styles
// @license       MIT
// @match         *://chromewebstore.google.com/detail/*
// @match         *://chrome.google.com/webstore/detail/*
// @grant         none
// @run-at        document-start
// ==/UserScript==

(function () {
  'use strict';

  const url = window.location.href;
  const extensionId = url
    ?.split('/detail/')[1] // 移除detail前的部分
    ?.split('?')[0] // 移除参数
    ?.replace(/\/$/, '') // 移除末尾“/”
    ?.replace(/\/reviews$/, '') // 移除末尾“/reviews”
    ?.replace(/.*\//, '') // 只保留最后一个“/”后的部分
    ?.match(/^[a-zA-Z]{32}$/)?.[0]; // 校验扩展ID
  if (extensionId) {
    // 成功提取到扩展ID，进行重定向
    const redirectUrl = `https://www.crx4chrome.com/extensions/${extensionId}/`;
    // 避免循环重定向
    if (url !== redirectUrl) {
      console.debug(`Redirecting: ${url} -> ${redirectUrl}`);
      window.location.href = redirectUrl;
    }
  }
})();
