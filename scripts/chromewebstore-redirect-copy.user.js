// ==UserScript==
// @name          ChromeWebStoreRedirectCopy
// @name:CN-zh_cn 谷歌网上应用店重定向
// @version       1.0
// @description   新标签页打开复制的Chrome网上应用店链接并重定向到crx4chrome.com
// @author        gaojr
// @namespace     https://github.com/gaojr/scripts-styles
// @license       MIT
// @match         *://*/*
// @grant         none
// @run-at        context-menu
// ==/UserScript==

(async function () {
  'use strict';

  try {
    const url = await navigator.clipboard.readText();
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
      console.debug(`Redirecting: ${url} -> ${redirectUrl}`);
      window.open(redirectUrl, '_blank');
    } else {
      console.debug(`No Redirecting: ${url}`);
    }
  } catch (err) {
    console.debug(`未复制可跳转的地址`);
  }
})();
