//  __  ___                _____           ____  ______   __
//  \ \/ / |   _   _  ___ |  ___|____  __ |  _ \/ ___\ \ / /
//   \  /| |  | | | |/ _ \| |_ / _ \ \/ / | | | \___ \\ V /
//   /  \| |__| |_| | (_) |  _| (_) >  < _| |_| |___) || |
//  /_/\_\_____\__,_|\___/|_|  \___/_/\_(_)____/|____/ |_|
//
// main.js

let 导航栏高度 = 110;

function xl_you_know() {
  xl_调试_输出("\n\n __  ___                _____           ____  ______   __\n \\ \\/ / |   _   _  ___ |  ___|____  __ |  _ \\/ ___\\ \\ / /\n  \\  /| |  | | | |/ _ \\| |_ / _ \\ \\/ / | | | \\___ \\\\ V / \n  /  \\| |__| |_| | (_) |  _| (_) >  < _| |_| |___) || |  \n /_/\\_\\_____\\__,_|\\___/|_|  \\___/_/\\_(_)____/|____/ |_|  \n                                                         \n\nfound bugs? chick here -> https://wj.qq.com/s2/14752724/59a5/");
}

// 适应导航栏高度
function xl_内容_适应标题栏高度() {
  const 导航栏高度2 = xl_元素_获取_使用ID("导航栏");
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      导航栏高度 = entry.contentRect.height;
      xl_调试_输出("内容_适应标题栏高度 > \n 标题栏高度：" + 导航栏高度);
      document.querySelectorAll(".xl_占位1").forEach((element) => {
        element.style.height = `${导航栏高度}px`;
      });
    }
  });
  observer.observe(导航栏高度2);
}
// 使用id
function xl_元素_获取_使用ID(elementId) {
  return document.getElementById(elementId);
}
// 使用class
function xl_元素_获取_使用Class(elementClass) {
  return document.getElementsByClassName(elementClass);
}
// 添加样式类
Element.prototype.xl_元素_样式_添加类 = function (styleClass) {
  this.classList.add(styleClass);
};
// 移除样式类
Element.prototype.xl_元素_样式_移除类 = function (styleClass) {
  this.classList.remove(styleClass);
};
// 调试输出
function xl_调试_输出(message) {
  console.log(`${new Date().toLocaleString()} > ${message}`);
}
// 调试输出错误
function xl_调试_输出_错误(error) {
  console.error(`${new Date().toLocaleString()} > ${error}`);
}
// 调试输出警告
function xl_调试_输出_警告(warning) {
  console.warn(`${new Date().toLocaleString()} > ${warning}`);
}
// 读本地存储
function xl_本地存储_读(key) {
  return localStorage.getItem(key);
}
// 写本地存储
function xl_本地存储_写(key, value) {
  localStorage.setItem(key, value);
}

// 复制文本到剪贴板函数
function xl_剪贴板_设置文本(xl_文本) {
  if (!navigator.clipboard) {
    xl_调试_输出_警告("剪贴板_设置文本 > \n不支持 Clipboard API，使用备用方法");
    xl_剪贴板_设置文本_备用(xl_文本);
    return;
  }
  navigator.clipboard.writeText(xl_文本).then(
    function () {
      xl_调试_输出("剪贴板_设置文本 > \n已成功复制到剪贴板：" + xl_文本);
    },
    function (错误) {
      xl_调试_输出_错误(`剪贴板_设置文本 > \n无法复制文本到剪贴板: ${错误}`);
    }
  );
}

// 备用方法复制文本
function xl_剪贴板_设置文本_备用(xl_文本) {
  var xl_文本区域 = document.createElement("textarea");
  xl_文本区域.value = xl_文本;
  xl_文本区域.style.position = "fixed";
  document.body.appendChild(xl_文本区域);
  xl_文本区域.focus();
  xl_文本区域.select();
  try {
    var xl_成功 = document.execCommand("copy");
    var xl_信息 = xl_成功 ? "成功" : "失败";
    xl_调试_输出(`xl_剪贴板_设置文本_备用 > \n复制文本： ${xl_文本}指令： ${xl_信息}`);
  } catch (xl_错误) {
    xl_调试_输出_错误(`xl_剪贴板_设置文本_备用 > \n无法使用备用方法复制文本: ${xl_错误}`);
  }
  document.body.removeChild(xl_文本区域);
}

// 判断是否弹出兼容性提示
function xl_兼容性提示_判断是否显示() {
  const c_应该显示 = xl_本地存储_读("显示兼容性提示") !== "false";
  const c_提示元素 = xl_元素_获取_使用ID("公告");

  if (c_应该显示) {
    c_提示元素.showModal();
    xl_元素_可拖动(c_提示元素);
  } else {
    xl_兼容性提示_关闭();
  }
  xl_调试_输出("兼容性提示_判断是否显示 > \n 是否显示兼容性提示：" + c_应该显示);
}

// 不再显示兼容性提示
function xl_兼容性提示_不再显示() {
  xl_本地存储_写("显示兼容性提示", "false");
  xl_兼容性提示_关闭();
}

// 关闭兼容性提示
function xl_兼容性提示_关闭() {
  xl_元素_获取_使用ID("公告").close();
  xl_元素_获取_使用ID("公告").style.display = "none";
}

// 元素的拖动
function xl_元素_可拖动(元素) {
  let 是否拖动 = false;
  let 起始X, 起始Y, 初始X, 初始Y;

  function 开始拖动(事件) {
    是否拖动 = true;
    起始X = 事件.clientX || 事件.touches[0].clientX;
    起始Y = 事件.clientY || 事件.touches[0].clientY;
    初始X = 元素.offsetLeft;
    初始Y = 元素.offsetTop;

    document.addEventListener("mousemove", 拖动中);
    document.addEventListener("mouseup", 结束拖动);
    document.addEventListener("touchmove", 拖动中);
    document.addEventListener("touchend", 结束拖动);
    xl_调试_输出("元素_可拖动 > \n 开始拖动");
  }

  function 拖动中(事件) {
    if (!是否拖动) return;

    const 当前X = 事件.clientX || 事件.touches[0].clientX;
    const 当前Y = 事件.clientY || 事件.touches[0].clientY;
    const 移动X = 当前X - 起始X;
    const 移动Y = 当前Y - 起始Y;

    元素.style.left = 初始X + 移动X + "px";
    元素.style.top = 初始Y + 移动Y + "px";
    xl_调试_输出("元素_可拖动 > \n 正在拖动");
  }

  function 结束拖动() {
    是否拖动 = false;
    document.removeEventListener("mousemove", 拖动中);
    document.removeEventListener("mouseup", 结束拖动);
    document.removeEventListener("touchmove", 拖动中);
    document.removeEventListener("touchend", 结束拖动);
    xl_调试_输出("元素_可拖动 > \n 停止拖动");
  }

  元素.addEventListener("mousedown", 开始拖动);
  元素.addEventListener("touchstart", 开始拖动);
}

function xl_iframe_改变网址(iframeId, iframeSrc) {
  const iframe = xl_元素_获取_使用ID(iframeId);
  iframe.setAttribute("src", iframeSrc);
  iframe.style.height = iframeSrc ? "50vh" : "0vh";
}

function xl_iframe_改变高度(iframeId, 尺寸) {
  const iframe = xl_元素_获取_使用ID(iframeId);
  iframe.style.height = `${尺寸}vh`;
}

function xl_内容_隐藏加载指示器() {
  xl_元素_获取_使用ID("jia1zai3ti2shi4").style.display = "none";
}

function xl_内容_实现锚点链接平滑滚动() {
  document.querySelectorAll('a[href^="#"]').forEach((锚点) => {
    锚点.addEventListener("click", function (事件) {
      事件.preventDefault();

      // 获取目标元素的ID
      const 目标Id = this.getAttribute("href").substring(1);
      const 目标元素 = xl_元素_获取_使用ID(目标Id);
      if (目标元素) {
        // 移除目标元素的类
        目标元素.xl_元素_样式_移除类("xl_遮罩1");
        目标元素.xl_元素_样式_移除类("xl_遮罩11");

        const 偏移 = 导航栏高度; // 导航栏的高度
        const 滚动容器 = xl_元素_获取_使用ID("xl_内容"); // 滚动的容器

        if (滚动容器) {
          const 目标位置 = 目标元素.getBoundingClientRect().top + 滚动容器.scrollTop - 偏移;

          滚动容器.scrollTo({
            top: 目标位置,
            behavior: "smooth",
          });

          xl_调试_输出(`xl_内容_实现锚点链接平滑滚动 > \n 滚动到目标元素：${目标Id}, 位置：${目标位置}`);

          // 滚动完成后添加CSS类
          setTimeout(() => {
            目标元素.xl_元素_样式_添加类("xl_遮罩1");
            xl_调试_输出(`xl_内容_实现锚点链接平滑滚动 > \n 给目标元素添加类：xl_遮罩1`);

            // 1秒后添加渐隐类
            setTimeout(() => {
              目标元素.xl_元素_样式_添加类("xl_遮罩11");
              xl_调试_输出(`xl_内容_实现锚点链接平滑滚动 > \n 给目标元素添加类：xl_遮罩11`);
            }, 1000); // 1秒后渐隐
          }, 500); // 设置一个延迟时间以确保滚动完成
        } else {
          xl_调试_输出_警告("xl_内容_实现锚点链接平滑滚动 > \n 未找到滚动容器");
        }
      } else {
        xl_调试_输出_错误(`xl_内容_实现锚点链接平滑滚动 > \n 未找到目标元素：${目标Id}`);
      }
    });
  });
}

function xl_节日系统() {
  // 定义节日和祝福语
  const 节日祝福 = {
    "01-01": "新年快乐！愿你在新的一年里万事如意，心想事成！",
    "02-14": "情人节快乐！愿你和你爱的人幸福美满，永浴爱河！",
    "03-08": "妇女节快乐！愿全天下的女性都能健康美丽，自信独立！",
    "04-01": "愚人节快乐！开怀大笑，轻松一下，愿你每一天都开心愉快！",
    "05-01": "劳动节快乐！向所有辛勤工作的劳动者致敬，愿你们节日愉快！",
    "06-01": "儿童节快乐！愿所有的孩子们都能健康成长，快乐无忧！",
    "06-15": "祝此站3周年快乐！感谢一路有你，未来更精彩！",
    "09-10": "教师节快乐！感谢所有辛勤工作的老师们，您们辛苦了！",
    "10-01": "国庆节快乐！愿我们的国家繁荣昌盛，人民幸福安康！",
    "11-19": "站长生日[doge]",
    "12-25": "圣诞节快乐！愿你度过一个温馨、愉快的圣诞节！",
    "12-31": "跨年夜快乐！愿新的一年带给你无尽的快乐和惊喜！",
  };

  // 获取当前日期
  const 今天 = new Date();
  const 月份 = String(今天.getMonth() + 1).padStart(2, "0"); // 获取月份并格式化为两位数字
  const 日期 = String(今天.getDate()).padStart(2, "0"); // 获取日期并格式化为两位数字
  const 格式化日期 = `${月份}-${日期}`; // 将月份和日期组合成MM-DD格式

  xl_调试_输出("节日系统 > \n 当前日期：" + 格式化日期);

  // 显示对应的祝福语
  const 祝福语元素 = xl_元素_获取_使用ID("节日系统_祝福语显示框");
  if (节日祝福[格式化日期]) {
    // 检查今天是否是节日
    祝福语元素.textContent = 节日祝福[格式化日期]; // 显示对应的祝福语
    xl_调试_输出("节日系统 > \n 显示祝福语：" + 节日祝福[格式化日期]);
  } else {
    祝福语元素.textContent = "今天没有特别的节日"; // 显示默认信息
    xl_调试_输出_警告("节日系统 > \n 今天没有特别的节日，奖励你一个警告[doge]");
  }
}

function xl_BUG反馈页面_弹出() {
  const c_是否弹出BUG反馈页面 = xl_本地存储_读("弹出BUG反馈页面") !== "false";
  if (c_是否弹出BUG反馈页面) {
    window.open("/page/bugsreport/index.html", "_blank");
  }
  xl_调试_输出("BUG反馈页面_弹出 > \n 是否弹出BUG反馈页面：" + c_是否弹出BUG反馈页面);
}

function xl_BUG反馈页面_设置不再弹出() {
  xl_本地存储_写("弹出BUG反馈页面", "false");
  window.close();
}

document.addEventListener("DOMContentLoaded", function () {
  xl_you_know();

  customElements.define(
    "xl-vista文本框",
    class extends HTMLElement {
      constructor() {
        super();
        const color = this.getAttribute("color") || "#00000000";
        const title = this.getAttribute("title") || "Default Title";
        const style1 = this.getAttribute("style1") || "";
        const style2 = this.getAttribute("style2") || "";
        const style3 = this.getAttribute("style3") || "";
        const style4 = this.getAttribute("style4") || "";
        const style5 = this.getAttribute("style5") || "";
        const id1 = this.getAttribute("id1") || "";
        const id2 = this.getAttribute("id2") || "";
        const content = this.innerHTML || "Default Content";
        this.innerHTML = `
      <div id="${title}">
        <div class="vista1" style="${style1}" id="${id1}">
          <div class="vista2" style="background-color: ${color}; ${style2}" id="${id2}">
            <div class="vista3" style="${style3}">
              <span>${title}</span>
            </div>
            <div class="vista4" style="${style4}">
              <div class="vista5" style="${style5}">
                ${content}
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      }
    }
  );

  customElements.define(
    "xl-目录上",
    class extends HTMLElement {
      constructor() {
        super();
        this.innerHTML = `
      <xl-vista文本框 title="加载指示器" id="jia1zai3ti2shi4">
        <div style="background-color: #ff0;">
          <span>页面加载未完成（页面正在加载）<br>
          由于此站托管于GitHub，可能需要一段时间才可完全加载</span>
        </div>
      </xl-vista文本框>
      <xl-vista文本框 title="导航">
        <a href="/index.html">
          <div style="padding: 10px; text-align: center;" class="xl_项目列表"><span>首页</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/blog/index.html">
          <div style="padding: 10px; text-align: center;" class="xl_项目列表"><span>博客</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/page/index.html">
          <div style="padding: 10px; text-align: center;" class="xl_项目列表"><span>页面</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/about.html">
          <div style="padding: 10px; text-align: center;" class="xl_项目列表"><span>关于</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
      </xl-vista文本框>
      `;
      }
    }
  );

  customElements.define(
    "xl-目录下",
    class extends HTMLElement {
      constructor() {
        super();
        this.innerHTML = `
      <xl-vista文本框 title="RSS订阅">
        <span>想第一时间知道更新了什么？此站已支持RSS订阅！复制下方的链接即可订阅！↓↓↓</span><br>
        <a href="/rss/main.xml">/rss/main.xml</a>
        <button onclick="xl_剪贴板_设置文本('http://dsy-xiaoluo.github.io/rss/main.xml')">复制</button>
      </xl-vista文本框>
      <xl-vista文本框 title="节日系统">
        <span id="节日系统_祝福语显示框"></span>
      </xl-vista文本框>
      <xl-vista文本框 title="COPYRIGHT">
       <div style="text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff; background: url(/file/img/1.jpg);   background-size: cover; background-repeat: no-repeat; background-position: center;">
         <span>Copyright © 2024 XLuoFox.DSY</span>
         <hr>
         <a href="https://icp.mcsite.cc/mc/11451419.html" target="_blank">MC ICP备: 11451419 号<img src="/file/img/wai4bu4lian4jie1.png"></a>
         <hr>
         <span>友情链接：<br>
         <a href="https://www.stylestar.win/" target="_blank">StyleStar论坛<img src="/file/img/wai4bu4lian4jie1.png"></a><br>
         <a href="https://spectrollay.github.io/minecraft_repository_test/" target="_blank">星月Minecraft版本库<img src="/file/img/wai4bu4lian4jie1.png"></a>
         </span>
       </div>
      </xl-vista文本框>
      `;
      }
    }
  );

  // 自定义元素xl-兼容性提示（兼容性提示）
  customElements.define(
    "xl-兼容性提示",
    class extends HTMLElement {
      constructor() {
        super();
        this.innerHTML = `
<dialog id="公告">
  <xl-vista文本框 title="dialog">
    <div style="display: flex; align-items: center; margin: 10px 10px 10px 10px">
      <div>
        <img src="/file/img/imageres-76.png" width="64px" height="64px" style="margin-right: 10px" />
      </div>
      <div style="font-size: 12px; overflow: auto;">
        <span style="font-size: 16px">公告</span><br />
        <span>此网站的域名（xiaoluo.link）将在今年7月23日到期，我们后续可能会更换为“xluofox.top”域名，请注意关注此处</span>
        <hr />
        <span style="font-size: 16px">兼容性提示</span><br />
        <span>此网站使用较复杂的CSS样式和较新的HTML标签，不能确保兼容所有浏览器，建议使用最新发行版Firefox、Chrome以及Edge访问此站</span>
      </div>
    </div>
    <div style="position: sticky; bottom: 0">
      <div style="border: 1px solid transparent; border-top-color: #00000040; border-bottom-color: #ffffff40"></div>
      <div style="background-color: #cbcbcb; text-align: right">
        <button onclick="xl_兼容性提示_关闭()">关闭</button>
        <button onclick="xl_兼容性提示_不再显示()" style="margin-right: 10px">不再显示</button>
      </div>
    </div>
  </xl-vista文本框>
</dialog>
      `;
      }
    }
  );

  xl_兼容性提示_判断是否显示();
  xl_内容_适应标题栏高度();
  xl_内容_实现锚点链接平滑滚动();
  xl_节日系统();
});

window.addEventListener("load", function () {
  xl_内容_隐藏加载指示器();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.shiftKey && event.key === "J") || (event.ctrlKey && event.key === "U")) {
    setTimeout(function () {
      xl_BUG反馈页面_弹出();
    }, 1000);
  }
});
