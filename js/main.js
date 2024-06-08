let dao3hang2lan2gao1du4 = 110

// 适应导航栏高度
function xl_内容_适应标题栏高度() {
  const dao3hang2lan2gao1du4huo4qu3yong4Element = xl_元素_获取_使用ID('dao3hang2lan2gao1du4huo4qu3yong4');
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      dao3hang2lan2gao1du4 = entry.contentRect.height;
      xl_调试_输出("标题栏高度：" + dao3hang2lan2gao1du4);
      document.querySelectorAll('.empty1').forEach(element => {
        element.style.height = `${dao3hang2lan2gao1du4}px`;
      });
    }
  });
  observer.observe(dao3hang2lan2gao1du4huo4qu3yong4Element);
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
Element.prototype.xl_元素_样式_添加类 = function(styleClass) {
  this.classList.add(styleClass);
};
// 移除样式类
Element.prototype.xl_元素_样式_移除类 = function(styleClass) {
  this.classList.remove(styleClass);
}
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

document.addEventListener('DOMContentLoaded', function () {

  // 自定义元素xl-vistatextbox（vista文本框）
  customElements.define('xl-vistatextbox', class extends HTMLElement {
    constructor() {
      super();
      const color = this.getAttribute('color') || '#00000000';
      const title = this.getAttribute('title') || 'Default Title';
      const style1 = this.getAttribute('style1') || '';
      const style2 = this.getAttribute('style2') || '';
      const style3 = this.getAttribute('style3') || '';
      const style4 = this.getAttribute('style4') || '';
      const style5 = this.getAttribute('style5') || '';
      const id1 = this.getAttribute('id1') || '';
      const id2 = this.getAttribute('id2') || '';
      const content = this.innerHTML || 'Default Content';
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
  });

  // 自定义元素xl-navbox（导航栏）
  customElements.define('xl-navbox', class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <xl-vistatextbox title="加载指示器" id="jia1zai3ti2shi4">
        <div style="background-color: #ff0;">
          <span>页面加载未完成（页面正在加载）<br>
          由于此站托管于GitHub，可能需要一段时间才可完全加载</span>
        </div>
      </xl-vistatextbox>
      <xl-vistatextbox title="导航">
        <a href="/index.html">
          <div style="padding: 10px; text-align: center;" class="blogbox"><span>首页</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/blog/index.html">
          <div style="padding: 10px; text-align: center;" class="blogbox"><span>博客</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/page/index.html">
          <div style="padding: 10px; text-align: center;" class="blogbox"><span>页面</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/about.html">
          <div style="padding: 10px; text-align: center;" class="blogbox"><span>关于</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
      </xl-vistatextbox>
      `;
    }
  });

  // 自定义元素xl-ce4bian1lan2（侧边栏）
  customElements.define('xl-ce4bian1lan2', class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <xl-vistatextbox title="RSS订阅">
        <span>此站已支持RSS订阅！复制下方的链接即可订阅！</span><br>
        <a href="/rss.xml">/rss.xml</a>
      </xl-vistatextbox>
      <xl-vistatextbox title="COPYRIGHT">
       <div style="text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff; background: url(/file/img/1.jpg);   background-size: cover; background-repeat: no-repeat; background-position: center;">
         <span>Copyright © 2024 XLuoFox.DSY</span>
         <hr>
         <span>特别鸣谢：<br>
         <a href="https://www.stylestar.win/" target="_blank">StyleStar论坛<img src="/file/img/wai4bu4lian4jie1.png"></a><br>
         <a href="https://spectrollay.github.io/minecraft_repository_test/" target="_blank">星月Minecraft版本库<img src="/file/img/wai4bu4lian4jie1.png"></a>
         </span>
       </div>
      </xl-vistatextbox>
      `;
    }
  });

  // 自定义元素xl-jian1rong2xing4ti2shi4（兼容性提示）
  customElements.define('xl-jian1rong2xing4ti2shi4', class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <xl-vistatextbox title="dialog" style1="box-shadow: 0px 0px 20px rgba(0, 0, 0, 1); cursor: move;" style5="max-width: 40vw; cursor: default;" id="jian1rong2xing4ti2shi4">
        <div style="display: flex; align-items: center; margin: 10px 10px 10px 10px;">
          <div>
            <img src="/file/img/imageres-76.png" width="64px" height="64px" style="margin-right: 10px;">
          </div>
          <div style="font-size: 12px; overflow: auto; height: 20vh; ">
            <span style="font-size: 16px;">公告</span><br>
            <span>此网站的域名（xiaoluo.link）将在今年7月23日到期，我们后续可能会更换为“xluofox.top”域名，请注意关注此处</span>
            <hr>
            <span style="font-size: 16px;">兼容性提示</span><br>
            <span>此网站使用较复杂的CSS样式和较新的HTML标签，不能确保兼容所有浏览器，建议使用最新发行版Firefox、Chrome以及Edge访问此站</span>
          </div>
        </div>
        <div style="position: sticky; bottom: 0;">
          <div style="border: 1px solid transparent; border-top-color: #00000040; border-bottom-color: #ffffff40;"></div>
          <div style="background-color: #cbcbcb; text-align: right;">
            <button onclick="xl_兼容性提示_关闭()">关闭</button>
            <button onclick="xl_兼容性提示_不再显示()" style="margin-right: 10px;">不再显示</button>
          </div>
        </div>
      </xl-vistatextbox>`;
    }
  });

  xl_兼容性提示_判断是否显示();
  xl_内容_适应标题栏高度();

  // 锚点链接的滚动
  document.querySelectorAll('a[href^="#"]').forEach(锚点 => {
    锚点.addEventListener('click', function (事件) {
      事件.preventDefault();

      // 获取目标元素的ID
      const 目标Id = this.getAttribute('href').substring(1);
      const 目标元素 = xl_元素_获取_使用ID(目标Id);
      if (目标元素) {
        
        // 移除目标元素的类
        目标元素.xl_元素_样式_移除类('zhe1zhao41');
        目标元素.xl_元素_样式_移除类('zhe1zhao411');

        const 偏移 = dao3hang2lan2gao1du4; // 导航栏的高度
        const 滚动容器 = xl_元素_获取_使用ID('nei4rong2'); // 滚动的容器

        if (滚动容器) {
          const 目标位置 = 目标元素.getBoundingClientRect().top + 滚动容器.scrollTop - 偏移;

          滚动容器.scrollTo({
            top: 目标位置,
            behavior: 'smooth'
          });

          xl_调试_输出(`滚动到目标元素：${目标Id}, 位置：${目标位置}`);

          // 滚动完成后添加CSS类
          setTimeout(() => {
            目标元素.xl_元素_样式_添加类('zhe1zhao41');
            xl_调试_输出(`给目标元素添加类：zhe1zhao41`);

            // 1秒后添加渐隐类
            setTimeout(() => {
              目标元素.xl_元素_样式_添加类('zhe1zhao411');
              xl_调试_输出(`给目标元素添加类：zhe1zhao411`);
            }, 1000); // 1秒后渐隐
          }, 500); // 设置一个延迟时间以确保滚动完成
        } else {
          xl_调试_输出_警告('未找到滚动容器');
        }
      } else {
        xl_调试_输出_错误(`未找到目标元素：${目标Id}`);
      }
    });
  });

})

window.addEventListener('load', function () {
  xl_内容_隐藏加载指示器()
})


// 判断是否弹出兼容性提示
function xl_兼容性提示_判断是否显示() {
  const shouldShow = xl_本地存储_读('不显示兼容性提示') !== 'true';
  const 提示元素 = xl_元素_获取_使用ID('jian1rong2xing4ti2shi4');

  if (shouldShow) {
    提示元素.style.display = "block";
    xl_元素_可拖动(提示元素);
  }
  xl_调试_输出('是否显示兼容性提示：' + shouldShow);
}

// 不再显示兼容性提示
function xl_兼容性提示_不再显示() {
  xl_本地存储_写('不显示兼容性提示', 'true');
  xl_兼容性提示_关闭()
}

// 关闭兼容性提示
function xl_兼容性提示_关闭() {
  xl_元素_获取_使用ID('jian1rong2xing4ti2shi4').style.display = "none";
}

// 元素的拖动
function xl_元素_可拖动(element) {
  let isDragging = false;
  let startX, startY, initialX, initialY;

  function onStart(event) {
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
    startY = event.clientY || event.touches[0].clientY;
    initialX = element.offsetLeft;
    initialY = element.offsetTop;

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onEnd);
    xl_调试_输出('开始拖动');
  }

  function onMove(event) {
    if (!isDragging) return;

    const clientX = event.clientX || event.touches[0].clientX;
    const clientY = event.clientY || event.touches[0].clientY;
    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    element.style.left = initialX + deltaX + 'px';
    element.style.top = initialY + deltaY + 'px';
    xl_调试_输出('正在拖动');
  }

  function onEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);
    xl_调试_输出('停止拖动');
  }

  element.addEventListener('mousedown', onStart);
  element.addEventListener('touchstart', onStart);
}

function xl_iframe_改变网址(iframeId, iframeSrc) {
  const iframe = xl_元素_获取_使用ID(iframeId);
  iframe.setAttribute('src', iframeSrc);
  iframe.style.height = iframeSrc ? '50vh' : '0vh';
}

function xl_iframe_改变高度(iframeId, size) {
  const iframe = xl_元素_获取_使用ID(iframeId);
  iframe.style.height = `${size}vh`;
}

function xl_内容_隐藏加载指示器() {
  xl_元素_获取_使用ID('jia1zai3ti2shi4').style.display = "none";
}
