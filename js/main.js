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
      <a name="${title}"></a>
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
      <div style="display: flex; align-items: center; margin: 10px 10px 0px 10px;">
      <div>
        <img src="/file/img/imageres-76.png" width="64px" height="64px" style="margin-right: 10px;">
      </div>
      <div>
        <span style="font-size: 24px;">公告</span><br>
        <span>此网站的域名（xiaoluo.link）将在今年7月23日到期，我们后续可能会更换为“xluofox.top”域名，请注意关注此处</span>
        <hr>
        <span style="font-size: 24px;">兼容性提示</span><br>
        <span>此网站使用较复杂的CSS样式和较新的HTML标签，不能确保兼容所有浏览器，建议使用最新发行版Firefox、Chrome以及Edge访问此站</span>
      </div>
    </div>
    <br>
    <div style="position: sticky; bottom: 0;">
      <div style="border: 1px solid transparent; border-top-color: #00000040; border-bottom-color: #ffffff40;"></div>
      <div style="background-color: #cbcbcb; text-align: right;">
        <button onclick="兼容性提示_关闭()">关闭</button>
        <button onclick="兼容性提示_不再显示()" style="margin-right: 10px;">不再显示</button>
      </div>
    </div>`;
    }
  });

  兼容性提示_判断是否显示();
  内容_适应标题栏高度();
})

window.addEventListener('load', function () {
  this.document.getElementById('jia1zai3ti2shi4').style.display = "none";
})

// 判断是否弹出兼容性提示
function 兼容性提示_判断是否显示() {
  const shouldShow = localStorage.getItem('不显示兼容性提示') !== 'true';
  const 提示元素 = document.getElementById('jian1rong2xing4ti2shi4');

  if (shouldShow) {
    提示元素.style.display = "block";
    元素_可拖动(提示元素);
  }
}

// 关闭兼容性提示
function 兼容性提示_关闭() {
  document.getElementById('jian1rong2xing4ti2shi4').style.display = "none";
}

// 不再显示兼容性提示
function 兼容性提示_不再显示() {
  localStorage.setItem('不显示兼容性提示', 'true');
  document.getElementById('jian1rong2xing4ti2shi4').style.display = "none";
}

// 元素的拖动
function 元素_可拖动(element) {
  let isDragging = false;
  let startX, startY, initialX, initialY;

  element.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = element.offsetLeft;
    initialY = element.offsetTop;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function onMouseMove(e) {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      element.style.left = initialX + deltaX + 'px';
      element.style.top = initialY + deltaY + 'px';
    }
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}

// 适应导航栏高度
function 内容_适应标题栏高度() {
  const dao3hang2lan2gao1du4huo4qu3yong4Element = document.getElementById('dao3hang2lan2gao1du4huo4qu3yong4');
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      const heightInView = entry.contentRect.height;
      document.querySelectorAll('.empty1').forEach(element => {
        element.style.height = `${heightInView}px`;
      });
    }
  });
  observer.observe(dao3hang2lan2gao1du4huo4qu3yong4Element);
}

function iframe_改变网址(iframeId, iframeSrc) {
  const iframe = document.getElementById(iframeId);
  iframe.setAttribute('src', iframeSrc);
  iframe.style.height = iframeSrc ? '50vh' : '0vh';
}

function iframe_改变高度(iframeId, size) {
  const iframe = document.getElementById(iframeId);
  iframe.style.height = `${size}vh`;
}
