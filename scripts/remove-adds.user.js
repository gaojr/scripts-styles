// ==UserScript==
// @author gaojr
// @namespace https://github.com/gaojr/tampermonkey-scripts
// @name:CN-zh_cn 移除广告
// @name RemoveAdds
// @version 0.12
// @description remove adds
// @license MIT
// @match https://*/*
// @require https://greasyfork.org/scripts/393085-commonsutil/code/CommonsUtil.js
// @grant none
// ==/UserScript==

const wlh = window.location.href;

// 目标[选择器|元素]
const targets = [];

/**
 * 移除目标
 */
const removeTargetAsSelector = () => {
  // 用英文逗号拼接选择器
  let selector = targets.join();
  if (!selector) {
    return;
  }
  removeAll(selector);
  // 清空列表
  targets.length = 0;
};

/**
 * 移除目标
 */
const removeTargetAsElement = () => {
  targets.forEach((ele) => {
    removeRecursively(ele);
  });
  // 清空列表
  targets.length = 0;
};

////////// 分割线

/**
 * 清楚iframe
 */
const cleanIframe = () => {
  const baidu = /https:\/\/pos\.baidu\.com\//;
  const google = /https:\/\/googleads/;

  _$$('iframe').forEach((ele) => {
    let src = ele.src;
    if (baidu.test(src) || google.test(src)) {
      targets.push(ele);
    }
  });
};

/**
 * 通用-广告
 */
const dealCommons = () => {
  _$$('[data-google-query-id]').forEach((ele) => {
    targets.push(ele);
  });
  _$$('[aria-label]').forEach((ele) => {
    let label = ele.getAttribute('aria-label');
    if (/baidu-ad/.test(label)) {
      targets.push(ele);
    }
  });
};

/**
 * 通用-脚本
 */
const dealScripts = () => {
  // 干掉 body 里的脚本
  targets.push('body script');
  removeTargetAsSelector();
};

////////// 分割线

/**
 * CSDN
 */
const dealCsdn = () => {
  // 文章页面
  const article = /https:\/\/.*\.csdn\.net\/.*\/article\/details\/.*/;

  if (article.test(wlh)) {
    clickIt('.btn-readmore');
  }
};

/**
 * 异次元 iplaysoft.com
 */
const dealIplaysoft = () => {
  // 全局
  dealScripts();

  // 文章页面
  const article = /https:\/\/www\.iplaysoft\.com\/.+/;

  if (article.test(wlh)) {
    // 删掉有 style、无 id、无 class、无文字的 div
    _$$('div[style]:not([id]):not([class])').forEach((ele) => {
      if (!ele.textContent.trim()) {
        ele.remove();
      }
    });
  }
};

////////// 分割线

(function () {
  let func = () => {
    cleanIframe();
    dealCommons();
    removeTargetAsElement();

    const isCsdn = /https?:\/\/.*\.csdn\.net((\/.*)|(\/?))/;
    const isIplaysoft = /https?:\/\/www\.iplaysoft\.com((\/.*)|(\/?))/;

    if (isCsdn.test(wlh)) {
      dealCsdn();
    } else if (isIplaysoft.test(wlh)) {
      dealIplaysoft();
    }
    removeTargetAsSelector();
  };
  addToFuncMap('resmove-add', func);
})();
