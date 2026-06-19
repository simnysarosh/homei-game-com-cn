// public/site-helper.js
// 生成页面提示卡片、关键词徽章和访问说明，不依赖第三方库

(function() {
  'use strict';

  // 配置数据
  var config = {
    siteUrl: 'https://homei-game.com.cn',
    keyword: '爱游戏',
    cardTitle: '站点提示',
    cardMessage: '欢迎来到 homei-game.com.cn，这里提供丰富的游戏相关内容。',
    badgeLabel: '关键词',
    accessTitle: '访问说明',
    accessSteps: [
      '使用现代浏览器打开站点',
      '确保网络连接稳定',
      '允许必要的页面脚本运行',
      '如遇问题，请刷新页面重试'
    ]
  };

  // 创建提示卡片
  function createTipCard() {
    var card = document.createElement('div');
    card.className = 'site-helper-card';
    card.style.cssText = 'position:fixed;top:20px;right:20px;background:#f9f9f9;border:1px solid #ddd;border-radius:8px;padding:16px;max-width:280px;box-shadow:0 2px 8px rgba(0,0,0,0.1);z-index:9999;font-family:Arial,sans-serif;';

    var title = document.createElement('h3');
    title.textContent = config.cardTitle;
    title.style.cssText = 'margin:0 0 8px 0;font-size:16px;color:#333;';
    card.appendChild(title);

    var message = document.createElement('p');
    message.textContent = config.cardMessage;
    message.style.cssText = 'margin:0;font-size:14px;color:#555;line-height:1.5;';
    card.appendChild(message);

    var link = document.createElement('a');
    link.href = config.siteUrl;
    link.textContent = '前往站点';
    link.style.cssText = 'display:inline-block;margin-top:10px;padding:6px 12px;background:#007bff;color:#fff;text-decoration:none;border-radius:4px;font-size:13px;';
    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(config.siteUrl, '_blank');
    });
    card.appendChild(link);

    document.body.appendChild(card);
  }

  // 创建关键词徽章
  function createKeywordBadge() {
    var badge = document.createElement('span');
    badge.className = 'site-helper-badge';
    badge.textContent = config.badgeLabel + ': ' + config.keyword;
    badge.style.cssText = 'position:fixed;bottom:20px;left:20px;background:#28a745;color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;font-family:Arial,sans-serif;box-shadow:0 2px 6px rgba(0,0,0,0.2);z-index:9999;';

    document.body.appendChild(badge);
  }

  // 创建访问说明
  function createAccessGuide() {
    var guide = document.createElement('div');
    guide.className = 'site-helper-guide';
    guide.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:14px;max-width:240px;box-shadow:0 2px 8px rgba(0,0,0,0.1);z-index:9999;font-family:Arial,sans-serif;';

    var title = document.createElement('h4');
    title.textContent = config.accessTitle;
    title.style.cssText = 'margin:0 0 10px 0;font-size:15px;color:#333;';
    guide.appendChild(title);

    var list = document.createElement('ul');
    list.style.cssText = 'margin:0;padding:0 0 0 18px;font-size:13px;color:#555;line-height:1.8;';
    config.accessSteps.forEach(function(step) {
      var item = document.createElement('li');
      item.textContent = step;
      list.appendChild(item);
    });
    guide.appendChild(list);

    document.body.appendChild(guide);
  }

  // 初始化函数
  function initSiteHelper() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        createTipCard();
        createKeywordBadge();
        createAccessGuide();
      });
    } else {
      createTipCard();
      createKeywordBadge();
      createAccessGuide();
    }
  }

  // 启动
  initSiteHelper();

})();