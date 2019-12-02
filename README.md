# tampermonkey-scripts

Tampermonkey Scripts

## 脚本(我写的)

### 通用

移除广告

* [Direct Install](./scripts/remove-adds.user.js)
* [GreasyFork](https://greasyfork.org/zh-CN/scripts/393030-removeadds)

### Bilibili

#### BilibiliEnhanced

1. 首页删除广告
2. 视频时关闭弹幕、自动宽屏
3. 直播时关闭弹幕

* [Direct Install](./scripts/bilibili-enhanced.user.js)
* [GreasyFork](https://greasyfork.org/zh-CN/scripts/380783-bilibilienhanced)

### GitHub

#### GitHubGoTop

GitHub 增加“一键返回顶部”按钮

* [Direct Install](./scripts/github-go-top.user.js)
* [GreasyFork](https://greasyfork.org/zh-CN/scripts/392584-githubgotop)

#### GitHubHideDesktop

GitHub 隐藏与“GitHub Desktop”相关的按钮

* [Direct Install](./scripts/github-hide-desktop.user.js)
* [GreasyFork](https://greasyfork.org/zh-CN/scripts/392623-githubhidedesktop)

#### github-update-forked

GitHub更新fork仓库

* [Direct Install](./scripts/github-update-forked.user.js)
* [GreasyFork](https://greasyfork.org/zh-CN/scripts/393205-github-update-forked)

## 脚本(别人写的)

推荐的脚本及我的设置~

* [StylishThemes/GitHub-Dark-Script](https://greasyfork.org/en/scripts/15562-github-dark-script)
    <br/>![settings](./resources/GitHub-Dark_Settings.png)
* [Mottie/GitHub code show whitespace](https://greasyfork.org/en/scripts/28454-github-code-show-whitespace)
    ```json
    {
        "show-whitespace": "true"
    }
    ```
* [Mottie/GitHub collapse markdown](https://greasyfork.org/en/scripts/20974-github-collapse-markdown)
    ```json
    {
        "ghcm-collapsed": false,
        "ghcm-colors": [ "#0066ff", "#3271b9", "#769fcd", "#b9d7ea", "#d6e6f2", "#f7fbfc" ]
    }
    ```

## 库(我写的)

### utils

一些公用方法

* [Direct Install](./libraries/utils.js)
* [GreasyFork](https://greasyfork.org/zh-CN/scripts/393085-commonsutil)

### css

一些常用 css

* [Direct Install](./libraries/css.user.js)
* [GreasyFork](https://greasyfork.org/zh-CN/scripts/393202-cssutil)
